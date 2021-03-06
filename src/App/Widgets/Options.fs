module Widgets.Options

open Fable.Core
open Fable.React
open Fable.React.Props
open Fulma
open Fulma.Extensions.Wikiki
open Thoth.Json
open Browser

[<Literal>]
let private MONACO_DEFAULT_FONT_FAMILY = "Menlo, Monaco, \"Courier New\", monospace"

[<Literal>]
let private LOCAL_STORAGE_REPL_SETTING = "fable_repl_settings"

type Model =
    { Optimize : bool
      DefineDebug : bool
      PreviewLanguage : bool
      FontSize : float
      FontFamily : string
      GistToken : string option
      GistTokenField : string }
    member this.ToOtherFSharpOptions =
        [| if this.DefineDebug then yield "--define:DEBUG"
           if this.PreviewLanguage then yield "--langversion:preview"
           yield "--optimize" + (if this.Optimize then "+" else "-") |]
    static member Default =
        { Optimize = false
          DefineDebug = true
          PreviewLanguage = true
          FontSize = 14.
          FontFamily = MONACO_DEFAULT_FONT_FAMILY
          GistToken = None
          GistTokenField = "" }

    static member Decoder =
        Decode.object (fun get ->
            { Optimize = false
                        // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
                        //  get.Optional.Field "optimize" Decode.bool
                        //     |> Option.defaultValue false
              DefineDebug = get.Optional.Field "defineDebug" Decode.bool |> Option.defaultValue true
              PreviewLanguage = get.Optional.Field "previewLanguage" Decode.bool |> Option.defaultValue true
              FontSize = get.Optional.Field "fontSize" Decode.float
                            |> Option.defaultValue 14.
              FontFamily = get.Optional.Field "fontFamily" Decode.string
                            |> Option.defaultValue MONACO_DEFAULT_FONT_FAMILY
              GistToken = get.Optional.Field "gistToken" Decode.string
              GistTokenField = "" } : Model
        )

    static member Encoder (model : Model) =
        Encode.object
            [ yield "optimize", Encode.bool model.Optimize
              yield "defineDebug", Encode.bool model.DefineDebug
              yield "previewLanguage", Encode.bool model.PreviewLanguage
              yield "fontSize", Encode.float model.FontSize
              yield "fontFamily", Encode.string model.FontFamily
              match model.GistToken with
              | Some token -> yield "gistToken", Encode.string token
              | None -> () ]

type Msg =
    | ToggleOptimize
    | ToggleDefineDebug
    | TogglePreviewLanguage
    | ChangeFontSize of float
    | ChangeFontFamily of string
    | ChangeGistToken of string
    | SaveToken
    | DeleteToken


let init () =
    match localStorage.getItem(LOCAL_STORAGE_REPL_SETTING) with
    | null -> Model.Default

    | settings ->
        match Decode.fromString Model.Decoder settings with
        | Ok settings ->
            settings

        | Error msg ->
            JS.console.log("Error while loading your settings from localStorage:\n", msg)
            Model.Default

let saveSettings (model : Model) =
    let data =
        Model.Encoder model
        |> Encode.toString 0

    localStorage.setItem(LOCAL_STORAGE_REPL_SETTING, data)
    model

let update msg model =
    match msg with
    | ToggleOptimize ->
        { model with Optimize = not model.Optimize }

    | ToggleDefineDebug ->
        { model with DefineDebug = not model.DefineDebug }

    | TogglePreviewLanguage ->
        { model with PreviewLanguage = not model.PreviewLanguage }

    | ChangeFontSize newSize ->
        { model with FontSize = newSize }

    | ChangeFontFamily newFont ->
        { model with FontFamily = newFont }

    | ChangeGistToken token ->
        { model with GistTokenField = token }

    | SaveToken ->
        { model with GistTokenField = ""
                     GistToken = Some model.GistTokenField }

    | DeleteToken ->
        { model with GistToken = None}

    // Save the setting in localStorage
    // Like that they are persistant between REPL reload
    |> saveSettings

let private fontSizeOption (label : string) (fontSize : float) =
    option [ Value (string fontSize) ]
        [ str label ]

let inline private fontSizeSetting (fontSize : float) dispatch =
    Field.div [ ]
        [ Label.label [ ]
            [ str "Editors font size" ]
          Control.div [ ]
            [ Select.select [ Select.IsFullWidth ]
                [ select [ Value (string fontSize)
                           OnChange (fun ev ->
                            ev.Value |> float |> ChangeFontSize |> dispatch
                           ) ]
                    [ fontSizeOption "Small" 12.
                      fontSizeOption "Medium" 14.
                      fontSizeOption "Large" 16. ] ] ] ]

let private fontFamilyOption (label : string) (fontFamily : string) =
    option [ Value fontFamily ]
        [ str label ]

let inline private fontFamilySetting (fontFamily : string) dispatch =
    Field.div [ ]
        [ Label.label [ ]
            [ str "Editors font family" ]
          Control.div [ ]
            [ Select.select [ Select.IsFullWidth ]
                [ select [ Value fontFamily
                           OnChange (fun ev ->
                            ev.Value |> ChangeFontFamily |> dispatch
                           ) ]
                    [ fontFamilyOption "Fira Code" "Fira Code"
                      fontFamilyOption "Monaco default" MONACO_DEFAULT_FONT_FAMILY ] ] ] ]

let private switchOption label isActive dispatch msg =
    Field.div [ ]
        [ Control.div [ ]
            [ Switch.switch [ Switch.Id label
                              Switch.Color IsSuccess
                              Switch.Checked isActive
                              Switch.OnChange (fun _ -> dispatch msg) ]
                [ str label ] ] ]


let inline private optimizeSetting (model: Model) dispatch =
    switchOption "Optimize (experimental)" model.Optimize dispatch ToggleOptimize

let private defineDebugSetting (model: Model) dispatch =
    switchOption "Define DEBUG" model.DefineDebug dispatch ToggleDefineDebug

let private previewLanguageSetting (model: Model) dispatch =
    switchOption "Preview F# features" model.PreviewLanguage dispatch TogglePreviewLanguage

let inline private gistTokenSetting (token : string option) (tokenField : string) dispatch =
    match token with
    | Some _ ->
        Field.div []
            [ Button.a
                    [ Button.OnClick (fun _ -> dispatch DeleteToken)
                      Button.IsFullWidth]
            [str "Delete gist token"] ]
    | None ->
        Field.div []
            [ Label.label []
                [ str "Github token"
                  a
                    [ Target "_blank"
                      Href "https://github.com/settings/tokens/new?description=fable-repl&scopes=gist"]
                    [ str "  (Create)"] ]
              Field.div [ Field.HasAddons ][
                  yield Input.password
                    [ Input.OnChange (fun e -> e.Value |> ChangeGistToken |> dispatch)
                      Input.Placeholder "Token with gist scope"]
                  if tokenField.Length = 40 then
                    yield Button.a
                        [ Button.OnClick (fun _ -> dispatch SaveToken) ]
                        [ str "Save"]
              ]
         ]


let view (model: Model) dispatch =
    div [ ]
        [ defineDebugSetting model dispatch
          previewLanguageSetting model dispatch
          fontFamilySetting model.FontFamily dispatch
          fontSizeSetting model.FontSize dispatch
          gistTokenSetting model.GistToken model.GistTokenField dispatch          
        // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
        //   optimizeSetting model dispatch
        ]
