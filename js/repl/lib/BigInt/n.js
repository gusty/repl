import { List, declare, Record } from "../fable-library.2.3.7/Types.js";
import { record, array, int32 } from "../fable-library.2.3.7/Reflection.js";
import { op_LeftShift, op_BitwiseAnd, op_Addition, compare, op_Subtraction, op_Division, equals, toInt, op_Modulus, op_Multiply, fromInteger, fromBits } from "../fable-library.2.3.7/Long.js";
import { ofList, copy, initialize, map, fill } from "../fable-library.2.3.7/Array.js";
import { int32ToString, ignore } from "../fable-library.2.3.7/Util.js";
import { isNullOrEmpty, join } from "../fable-library.2.3.7/String.js";
export const BigNat = declare(function BigInt_BigNat(arg1, arg2) {
  this.bound = arg1 | 0;
  this.digits = arg2;
}, Record);
export function BigNat$reflection() {
  return record("BigInt.BigNat", [], BigNat, () => [["bound", int32], ["digits", array(int32)]]);
}
export function BigNatModule$002EFFT$$$pow32(x, n) {
  BigNatModule$002EFFT$$$pow32: while (true) {
    if (n === 0) {
      return 1;
    } else if (n % 2 === 0) {
      const $n$$2 = n;
      const $x$$1 = x;
      x = $x$$1 * $x$$1;
      n = ~~($n$$2 / 2);
      continue BigNatModule$002EFFT$$$pow32;
    } else {
      return x * BigNatModule$002EFFT$$$pow32(x * x, ~~(n / 2)) | 0;
    }

    break;
  }
}
export function BigNatModule$002EFFT$$$leastBounding2Power(b) {
  const findBounding2Power = function findBounding2Power(b$$1, tp, i) {
    findBounding2Power: while (true) {
      if (b$$1 <= tp) {
        return [tp, i];
      } else {
        const $b$$1$$3 = b$$1;
        const $i$$5 = i;
        const $tp$$4 = tp;
        b$$1 = $b$$1$$3;
        tp = $tp$$4 * 2;
        i = $i$$5 + 1;
        continue findBounding2Power;
      }

      break;
    }
  };

  return findBounding2Power(b, 1, 0);
}
const BigNatModule$002EFFT$$$patternInput$004074 = [fromBits(2013265921, 0, false), 27, 15, 31, 440564289];
export const BigNatModule$002EFFT$$$w = BigNatModule$002EFFT$$$patternInput$004074[4];
export const BigNatModule$002EFFT$$$p = BigNatModule$002EFFT$$$patternInput$004074[0];
export const BigNatModule$002EFFT$$$m = BigNatModule$002EFFT$$$patternInput$004074[2];
export const BigNatModule$002EFFT$$$k = BigNatModule$002EFFT$$$patternInput$004074[1];
export const BigNatModule$002EFFT$$$g = BigNatModule$002EFFT$$$patternInput$004074[3];
export const BigNatModule$002EFFT$$$primeP = BigNatModule$002EFFT$$$p;
export const BigNatModule$002EFFT$$$maxBitsInsideFp = 30;
export const BigNatModule$002EFFT$002EFp$$$p = 2013265921;
export const BigNatModule$002EFFT$002EFp$$$p64 = fromBits(2013265921, 0, true);
export function BigNatModule$002EFFT$002EFp$$$toInt(x$$1) {
  return ~~x$$1;
}
export function BigNatModule$002EFFT$002EFp$$$ofInt32(x$$2) {
  return x$$2 >>> 0;
}
export const BigNatModule$002EFFT$002EFp$$$mzero = 0;
export const BigNatModule$002EFFT$002EFp$$$mone = 1;
export const BigNatModule$002EFFT$002EFp$$$mtwo = 2;
export function BigNatModule$002EFFT$002EFp$$$mpow(x$$3, n$$1) {
  BigNatModule$002EFFT$002EFp$$$mpow: while (true) {
    if (n$$1 === 0) {
      return BigNatModule$002EFFT$002EFp$$$mone;
    } else if (n$$1 % 2 === 0) {
      const $n$$1$$7 = n$$1;
      const $x$$3$$6 = x$$3;
      x$$3 = toInt(op_Modulus(op_Multiply(fromInteger($x$$3$$6, true, 6), fromInteger($x$$3$$6, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
      n$$1 = ~~($n$$1$$7 / 2);
      continue BigNatModule$002EFFT$002EFp$$$mpow;
    } else {
      return toInt(op_Modulus(op_Multiply(fromInteger(x$$3, true, 6), fromInteger(BigNatModule$002EFFT$002EFp$$$mpow(toInt(op_Modulus(op_Multiply(fromInteger(x$$3, true, 6), fromInteger(x$$3, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0, ~~(n$$1 / 2)), true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
    }

    break;
  }
}
export function BigNatModule$002EFFT$002EFp$$$mpowL(x$$7, n$$2) {
  BigNatModule$002EFFT$002EFp$$$mpowL: while (true) {
    if (equals(n$$2, fromBits(0, 0, false))) {
      return BigNatModule$002EFFT$002EFp$$$mone;
    } else if (equals(op_Modulus(n$$2, fromBits(2, 0, false)), fromBits(0, 0, false))) {
      const $n$$2$$9 = n$$2;
      const $x$$7$$8 = x$$7;
      x$$7 = toInt(op_Modulus(op_Multiply(fromInteger($x$$7$$8, true, 6), fromInteger($x$$7$$8, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
      n$$2 = op_Division($n$$2$$9, fromBits(2, 0, false));
      continue BigNatModule$002EFFT$002EFp$$$mpowL;
    } else {
      return toInt(op_Modulus(op_Multiply(fromInteger(x$$7, true, 6), fromInteger(BigNatModule$002EFFT$002EFp$$$mpowL(toInt(op_Modulus(op_Multiply(fromInteger(x$$7, true, 6), fromInteger(x$$7, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0, op_Division(n$$2, fromBits(2, 0, false))), true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
    }

    break;
  }
}
export function BigNatModule$002EFFT$002EFp$$$m2PowNthRoot(n$$3) {
  return BigNatModule$002EFFT$002EFp$$$mpow(BigNatModule$002EFFT$$$w >>> 0, BigNatModule$002EFFT$$$pow32(2, BigNatModule$002EFFT$$$k - n$$3));
}
export function BigNatModule$002EFFT$002EFp$$$minv(x$$11) {
  return BigNatModule$002EFFT$002EFp$$$mpowL(x$$11, op_Subtraction(BigNatModule$002EFFT$$$primeP, fromBits(2, 0, false)));
}
export function BigNatModule$002EFFT$$$computeFFT(lambda, mu, n$$4, w, u, res, offset) {
  if (n$$4 === 1) {
    res[offset] = u[mu];
  } else {
    const halfN = ~~(n$$4 / 2) | 0;
    const ww = toInt(op_Modulus(op_Multiply(fromInteger(w, true, 6), fromInteger(w, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
    const offsetHalfN = offset + halfN | 0;
    BigNatModule$002EFFT$$$computeFFT(lambda * 2, mu, halfN, ww, u, res, offset);
    BigNatModule$002EFFT$$$computeFFT(lambda * 2, lambda + mu, halfN, ww, u, res, offsetHalfN);
    let wj = BigNatModule$002EFFT$002EFp$$$mone;

    for (let j = 0; j <= halfN - 1; j++) {
      const even = res[offset + j];
      const odd = res[offsetHalfN + j];
      res[offset + j] = (even + (toInt(op_Modulus(op_Multiply(fromInteger(wj, true, 6), fromInteger(odd, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0)) % BigNatModule$002EFFT$002EFp$$$p;
      res[offsetHalfN + j] = (even + BigNatModule$002EFFT$002EFp$$$p - (toInt(op_Modulus(op_Multiply(fromInteger(wj, true, 6), fromInteger(odd, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0)) % BigNatModule$002EFFT$002EFp$$$p;
      wj = toInt(op_Modulus(op_Multiply(fromInteger(w, true, 6), fromInteger(wj, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
    }
  }
}
export function BigNatModule$002EFFT$$$computFftInPlace(n$$5, w$$1, u$$1) {
  const lambda$$1 = 1;
  const mu$$1 = 0;
  const res$$1 = fill(new Uint32Array(n$$5), 0, n$$5, BigNatModule$002EFFT$002EFp$$$mzero);
  const offset$$1 = 0;
  BigNatModule$002EFFT$$$computeFFT(lambda$$1, mu$$1, n$$5, w$$1, u$$1, res$$1, offset$$1);
  return res$$1;
}
export function BigNatModule$002EFFT$$$computeInverseFftInPlace(n$$6, w$$2, uT) {
  const bigKInv = BigNatModule$002EFFT$002EFp$$$minv(n$$6 >>> 0);
  return map(function (y$$12) {
    return toInt(op_Modulus(op_Multiply(fromInteger(bigKInv, true, 6), fromInteger(y$$12, true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
  }, BigNatModule$002EFFT$$$computFftInPlace(n$$6, BigNatModule$002EFFT$002EFp$$$minv(w$$2), uT), Uint32Array);
}
export const BigNatModule$002EFFT$$$maxTwoPower = 29;
export const BigNatModule$002EFFT$$$twoPowerTable = initialize(BigNatModule$002EFFT$$$maxTwoPower - 1, function (i$$1) {
  return BigNatModule$002EFFT$$$pow32(2, i$$1);
}, Int32Array);
export function BigNatModule$002EFFT$$$computeFftPaddedPolynomialProduct(bigK, k, u$$2, v) {
  const w$$3 = BigNatModule$002EFFT$002EFp$$$m2PowNthRoot(k);
  const n$$7 = bigK | 0;
  const uT$$1 = BigNatModule$002EFFT$$$computFftInPlace(n$$7, w$$3, u$$2);
  const vT = BigNatModule$002EFFT$$$computFftInPlace(n$$7, w$$3, v);
  const rT = initialize(n$$7, function (i$$2) {
    return toInt(op_Modulus(op_Multiply(fromInteger(uT$$1[i$$2], true, 6), fromInteger(vT[i$$2], true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
  }, Uint32Array);
  const r = BigNatModule$002EFFT$$$computeInverseFftInPlace(n$$7, w$$3, rT);
  return r;
}
export function BigNatModule$002EFFT$$$padTo(n$$8, u$$3) {
  const uBound = u$$3.length | 0;
  return initialize(n$$8, function (i$$3) {
    return i$$3 < uBound ? BigNatModule$002EFFT$002EFp$$$ofInt32(u$$3[i$$3]) : BigNatModule$002EFFT$002EFp$$$mzero;
  }, Uint32Array);
}
export function BigNatModule$002EFFT$$$computeFftPolynomialProduct(degu, u$$4, degv, v$$1) {
  const deguv = degu + degv | 0;
  const bound = deguv + 1 | 0;
  const patternInput = BigNatModule$002EFFT$$$leastBounding2Power(bound);
  const w$$4 = BigNatModule$002EFFT$002EFp$$$m2PowNthRoot(patternInput[1]);
  const u$$5 = BigNatModule$002EFFT$$$padTo(patternInput[0], u$$4);
  const v$$2 = BigNatModule$002EFFT$$$padTo(patternInput[0], v$$1);
  const n$$9 = patternInput[0] | 0;
  const uT$$2 = BigNatModule$002EFFT$$$computFftInPlace(n$$9, w$$4, u$$5);
  const vT$$1 = BigNatModule$002EFFT$$$computFftInPlace(n$$9, w$$4, v$$2);
  const rT$$1 = initialize(n$$9, function (i$$4) {
    return toInt(op_Modulus(op_Multiply(fromInteger(uT$$2[i$$4], true, 6), fromInteger(vT$$1[i$$4], true, 6)), BigNatModule$002EFFT$002EFp$$$p64)) >>> 0;
  }, Uint32Array);
  const r$$1 = BigNatModule$002EFFT$$$computeInverseFftInPlace(n$$9, w$$4, rT$$1);
  return map(BigNatModule$002EFFT$002EFp$$$toInt, r$$1, Int32Array);
}
export const BigNatModule$002EFFT$$$mzero = BigNatModule$002EFFT$002EFp$$$mzero;
export const BigNatModule$002EFFT$$$mone = BigNatModule$002EFFT$002EFp$$$mone;
export const BigNatModule$002EFFT$$$maxFp = (BigNatModule$002EFFT$002EFp$$$p + BigNatModule$002EFFT$002EFp$$$p - BigNatModule$002EFFT$$$mone) % BigNatModule$002EFFT$002EFp$$$p;
export function BigNatModule$$$bound(n$$10) {
  return n$$10.bound;
}
export function BigNatModule$$$setBound(n$$11, v$$3) {
  n$$11.bound = v$$3;
}
export function BigNatModule$$$coeff(n$$12, i$$5) {
  return n$$12.digits[i$$5];
}
export function BigNatModule$$$coeff64(n$$13, i$$6) {
  return fromInteger(BigNatModule$$$coeff(n$$13, i$$6), false, 2);
}
export function BigNatModule$$$setCoeff(n$$14, i$$7, v$$4) {
  n$$14.digits[i$$7] = v$$4;
}
export function BigNatModule$$$pow64(x$$23, n$$15) {
  BigNatModule$$$pow64: while (true) {
    if (n$$15 === 0) {
      return fromBits(1, 0, false);
    } else if (n$$15 % 2 === 0) {
      const $n$$15$$11 = n$$15;
      const $x$$23$$10 = x$$23;
      x$$23 = op_Multiply($x$$23$$10, $x$$23$$10);
      n$$15 = ~~($n$$15$$11 / 2);
      continue BigNatModule$$$pow64;
    } else {
      return op_Multiply(x$$23, BigNatModule$$$pow64(op_Multiply(x$$23, x$$23), ~~(n$$15 / 2)));
    }

    break;
  }
}
export function BigNatModule$$$pow32(x$$24, n$$16) {
  BigNatModule$$$pow32: while (true) {
    if (n$$16 === 0) {
      return 1;
    } else if (n$$16 % 2 === 0) {
      const $n$$16$$13 = n$$16;
      const $x$$24$$12 = x$$24;
      x$$24 = $x$$24$$12 * $x$$24$$12;
      n$$16 = ~~($n$$16$$13 / 2);
      continue BigNatModule$$$pow32;
    } else {
      return x$$24 * BigNatModule$$$pow32(x$$24 * x$$24, ~~(n$$16 / 2)) | 0;
    }

    break;
  }
}
export function BigNatModule$$$hash(n$$17) {
  let res$$2 = 0;

  for (let i$$8 = 0; i$$8 <= n$$17.bound - 1; i$$8++) {
    res$$2 = n$$17.digits[i$$8] + (res$$2 << 3);
  }

  return res$$2 | 0;
}
export function BigNatModule$$$maxInt(a, b$$2) {
  if (a < b$$2) {
    return b$$2 | 0;
  } else {
    return a | 0;
  }
}
export function BigNatModule$$$minInt(a$$1, b$$3) {
  if (a$$1 < b$$3) {
    return a$$1 | 0;
  } else {
    return b$$3 | 0;
  }
}
export const BigNatModule$$$baseBits = 24;
export const BigNatModule$$$baseN = 16777216;
export const BigNatModule$$$baseMask = 16777215;
export const BigNatModule$$$baseNi64 = fromBits(16777216, 0, false);
export const BigNatModule$$$baseMaski64 = fromBits(16777215, 0, false);
export const BigNatModule$$$baseMaskU = fromBits(16777215, 0, true);
export const BigNatModule$$$baseMask32A = 16777215;
export const BigNatModule$$$baseMask32B = 255;
export const BigNatModule$$$baseShift32B = 24;
export const BigNatModule$$$baseMask64A = 16777215;
export const BigNatModule$$$baseMask64B = 16777215;
export const BigNatModule$$$baseMask64C = 65535;
export const BigNatModule$$$baseShift64B = 24;
export const BigNatModule$$$baseShift64C = 48;
export function BigNatModule$$$divbase(x$$25) {
  return ~~(x$$25 >>> 0 >>> BigNatModule$$$baseBits);
}
export function BigNatModule$$$modbase(x$$26) {
  return x$$26 & BigNatModule$$$baseMask;
}
export function BigNatModule$$$createN(b$$4) {
  return new BigNat(b$$4, new Int32Array(b$$4));
}
export function BigNatModule$$$copyN(x$$27) {
  return new BigNat(x$$27.bound, copy(x$$27.digits, Int32Array));
}
export function BigNatModule$$$normN(n$$18) {
  const findLeastBound = function findLeastBound(na, i$$9) {
    findLeastBound: while (true) {
      if (i$$9 === -1 ? true : na[i$$9] !== 0) {
        return i$$9 + 1 | 0;
      } else {
        const $i$$9$$15 = i$$9;
        const $na$$14 = na;
        na = $na$$14;
        i$$9 = $i$$9$$15 - 1;
        continue findLeastBound;
      }

      break;
    }
  };

  const bound$$1 = findLeastBound(n$$18.digits, n$$18.bound - 1) | 0;
  n$$18.bound = bound$$1;
  return n$$18;
}
export const BigNatModule$$$boundInt = 2;
export const BigNatModule$$$boundInt64 = 3;
export const BigNatModule$$$boundBase = 1;
export function BigNatModule$$$embed(x$$28) {
  const x$$29 = (x$$28 < 0 ? 0 : x$$28) | 0;

  if (x$$29 < BigNatModule$$$baseN) {
    const r$$2 = BigNatModule$$$createN(1);
    r$$2.digits[0] = x$$29;
    return BigNatModule$$$normN(r$$2);
  } else {
    const r$$3 = BigNatModule$$$createN(BigNatModule$$$boundInt);

    for (let i$$10 = 0; i$$10 <= BigNatModule$$$boundInt - 1; i$$10++) {
      r$$3.digits[i$$10] = ~~(x$$29 / BigNatModule$$$pow32(BigNatModule$$$baseN, i$$10)) % BigNatModule$$$baseN;
    }

    return BigNatModule$$$normN(r$$3);
  }
}
export function BigNatModule$$$embed64(x$$30) {
  const x$$31 = compare(x$$30, fromBits(0, 0, false)) < 0 ? fromBits(0, 0, false) : x$$30;
  const r$$4 = BigNatModule$$$createN(BigNatModule$$$boundInt64);

  for (let i$$11 = 0; i$$11 <= BigNatModule$$$boundInt64 - 1; i$$11++) {
    r$$4.digits[i$$11] = ~~toInt(op_Modulus(op_Division(x$$31, BigNatModule$$$pow64(BigNatModule$$$baseNi64, i$$11)), BigNatModule$$$baseNi64));
  }

  return BigNatModule$$$normN(r$$4);
}
export function BigNatModule$$$eval32(n$$19) {
  if (n$$19.bound === 1) {
    return n$$19.digits[0] | 0;
  } else {
    let acc = 0;

    for (let i$$12 = n$$19.bound - 1; i$$12 >= 0; i$$12--) {
      acc = n$$19.digits[i$$12] + BigNatModule$$$baseN * acc;
    }

    return acc | 0;
  }
}
export function BigNatModule$$$eval64(n$$20) {
  if (n$$20.bound === 1) {
    return fromInteger(n$$20.digits[0], false, 2);
  } else {
    let acc$$1 = fromBits(0, 0, false);

    for (let i$$13 = n$$20.bound - 1; i$$13 >= 0; i$$13--) {
      acc$$1 = op_Addition(fromInteger(n$$20.digits[i$$13], false, 2), op_Multiply(BigNatModule$$$baseNi64, acc$$1));
    }

    return acc$$1;
  }
}
export const BigNatModule$$$one = BigNatModule$$$embed(1);
export const BigNatModule$$$zero = BigNatModule$$$embed(0);
export function BigNatModule$$$restrictTo(d, n$$21) {
  return new BigNat(BigNatModule$$$minInt(d, n$$21.bound), n$$21.digits);
}
export function BigNatModule$$$shiftUp(d$$1, n$$22) {
  const m = BigNatModule$$$createN(n$$22.bound + d$$1);

  for (let i$$14 = 0; i$$14 <= n$$22.bound - 1; i$$14++) {
    m.digits[i$$14 + d$$1] = n$$22.digits[i$$14];
  }

  return m;
}
export function BigNatModule$$$shiftDown(d$$2, n$$23) {
  if (n$$23.bound - d$$2 <= 0) {
    return BigNatModule$$$zero;
  } else {
    const m$$1 = BigNatModule$$$createN(n$$23.bound - d$$2);

    for (let i$$15 = 0; i$$15 <= m$$1.bound - 1; i$$15++) {
      m$$1.digits[i$$15] = n$$23.digits[i$$15 + d$$2];
    }

    return m$$1;
  }
}
export function BigNatModule$$$degree(n$$24) {
  return n$$24.bound - 1;
}
export function BigNatModule$$$addP(i$$16, n$$25, c, p, q, r$$5) {
  BigNatModule$$$addP: while (true) {
    if (i$$16 < n$$25) {
      const x$$32 = (i$$16 < p.bound ? p.digits[i$$16] : 0) + (i$$16 < q.bound ? q.digits[i$$16] : 0) + c | 0;
      r$$5.digits[i$$16] = BigNatModule$$$modbase(x$$32);
      const c$$1 = BigNatModule$$$divbase(x$$32) | 0;
      const $i$$16$$16 = i$$16;
      const $n$$25$$17 = n$$25;
      const $p$$18 = p;
      const $q$$19 = q;
      const $r$$5$$20 = r$$5;
      i$$16 = $i$$16$$16 + 1;
      n$$25 = $n$$25$$17;
      c = c$$1;
      p = $p$$18;
      q = $q$$19;
      r$$5 = $r$$5$$20;
      continue BigNatModule$$$addP;
    }

    break;
  }
}
export function BigNatModule$$$add(p$$1, q$$1) {
  const rbound = 1 + BigNatModule$$$maxInt(p$$1.bound, q$$1.bound) | 0;
  const r$$6 = BigNatModule$$$createN(rbound);
  const carry = 0;
  BigNatModule$$$addP(0, rbound, carry, p$$1, q$$1, r$$6);
  return BigNatModule$$$normN(r$$6);
}
export function BigNatModule$$$subP(i$$19, n$$26, c$$2, p$$2, q$$2, r$$7) {
  BigNatModule$$$subP: while (true) {
    if (i$$19 < n$$26) {
      const x$$33 = (i$$19 < p$$2.bound ? p$$2.digits[i$$19] : 0) - (i$$19 < q$$2.bound ? q$$2.digits[i$$19] : 0) + c$$2 | 0;

      if (x$$33 > 0) {
        r$$7.digits[i$$19] = BigNatModule$$$modbase(x$$33);
        const c$$3 = BigNatModule$$$divbase(x$$33) | 0;
        const $i$$19$$21 = i$$19;
        const $n$$26$$22 = n$$26;
        const $p$$2$$23 = p$$2;
        const $q$$2$$24 = q$$2;
        const $r$$7$$25 = r$$7;
        i$$19 = $i$$19$$21 + 1;
        n$$26 = $n$$26$$22;
        c$$2 = c$$3;
        p$$2 = $p$$2$$23;
        q$$2 = $q$$2$$24;
        r$$7 = $r$$7$$25;
        continue BigNatModule$$$subP;
      } else {
        const x$$34 = x$$33 + BigNatModule$$$baseN | 0;
        r$$7.digits[i$$19] = BigNatModule$$$modbase(x$$34);
        const c$$4 = BigNatModule$$$divbase(x$$34) - 1 | 0;
        const $i$$19$$26 = i$$19;
        const $n$$26$$27 = n$$26;
        const $p$$2$$28 = p$$2;
        const $q$$2$$29 = q$$2;
        const $r$$7$$30 = r$$7;
        i$$19 = $i$$19$$26 + 1;
        n$$26 = $n$$26$$27;
        c$$2 = c$$4;
        p$$2 = $p$$2$$28;
        q$$2 = $q$$2$$29;
        r$$7 = $r$$7$$30;
        continue BigNatModule$$$subP;
      }
    } else {
      const underflow = c$$2 !== 0;
      return underflow;
    }

    break;
  }
}
export function BigNatModule$$$sub(p$$3, q$$3) {
  const rbound$$1 = BigNatModule$$$maxInt(p$$3.bound, q$$3.bound) | 0;
  const r$$8 = BigNatModule$$$createN(rbound$$1);
  const carry$$1 = 0;
  const underflow$$1 = BigNatModule$$$subP(0, rbound$$1, carry$$1, p$$3, q$$3, r$$8);

  if (underflow$$1) {
    return BigNatModule$$$embed(0);
  } else {
    return BigNatModule$$$normN(r$$8);
  }
}
export function BigNatModule$$$isZero(p$$4) {
  return p$$4.bound === 0;
}
export function BigNatModule$$$IsZero(p$$5) {
  return BigNatModule$$$isZero(p$$5);
}
export function BigNatModule$$$isOne(p$$6) {
  if (p$$6.bound === 1) {
    return p$$6.digits[0] === 1;
  } else {
    return false;
  }
}
export function BigNatModule$$$equal(p$$7, q$$4) {
  if (p$$7.bound === q$$4.bound) {
    const check = function check(pa, qa, i$$22) {
      check: while (true) {
        if (i$$22 === -1) {
          return true;
        } else if (pa[i$$22] === qa[i$$22]) {
          const $i$$22$$33 = i$$22;
          const $pa$$31 = pa;
          const $qa$$32 = qa;
          pa = $pa$$31;
          qa = $qa$$32;
          i$$22 = $i$$22$$33 - 1;
          continue check;
        } else {
          return false;
        }

        break;
      }
    };

    return check(p$$7.digits, q$$4.digits, p$$7.bound - 1);
  } else {
    return false;
  }
}
export function BigNatModule$$$shiftCompare(p$$8, pn, q$$5, qn) {
  if (p$$8.bound + pn < q$$5.bound + qn) {
    return -1 | 0;
  } else if (p$$8.bound + pn > q$$5.bound + pn) {
    return 1;
  } else {
    const check$$1 = function check$$1(pa$$1, qa$$1, i$$23) {
      check$$1: while (true) {
        if (i$$23 === -1) {
          return 0;
        } else {
          const pai = (i$$23 < pn ? 0 : pa$$1[i$$23 - pn]) | 0;
          const qai = (i$$23 < qn ? 0 : qa$$1[i$$23 - qn]) | 0;

          if (pai === qai) {
            const $i$$23$$36 = i$$23;
            const $pa$$1$$34 = pa$$1;
            const $qa$$1$$35 = qa$$1;
            pa$$1 = $pa$$1$$34;
            qa$$1 = $qa$$1$$35;
            i$$23 = $i$$23$$36 - 1;
            continue check$$1;
          } else if (pai < qai) {
            return -1 | 0;
          } else {
            return 1;
          }
        }

        break;
      }
    };

    return check$$1(p$$8.digits, q$$5.digits, p$$8.bound + pn - 1) | 0;
  }
}
export function BigNatModule$$$compare(p$$9, q$$6) {
  if (p$$9.bound < q$$6.bound) {
    return -1 | 0;
  } else if (p$$9.bound > q$$6.bound) {
    return 1;
  } else {
    const check$$2 = function check$$2(pa$$2, qa$$2, i$$24) {
      check$$2: while (true) {
        if (i$$24 === -1) {
          return 0;
        } else if (pa$$2[i$$24] === qa$$2[i$$24]) {
          const $i$$24$$39 = i$$24;
          const $pa$$2$$37 = pa$$2;
          const $qa$$2$$38 = qa$$2;
          pa$$2 = $pa$$2$$37;
          qa$$2 = $qa$$2$$38;
          i$$24 = $i$$24$$39 - 1;
          continue check$$2;
        } else if (pa$$2[i$$24] < qa$$2[i$$24]) {
          return -1 | 0;
        } else {
          return 1;
        }

        break;
      }
    };

    return check$$2(p$$9.digits, q$$6.digits, p$$9.bound - 1) | 0;
  }
}
export function BigNatModule$$$lt(p$$10, q$$7) {
  return BigNatModule$$$compare(p$$10, q$$7) === -1;
}
export function BigNatModule$$$gt(p$$11, q$$8) {
  return BigNatModule$$$compare(p$$11, q$$8) === 1;
}
export function BigNatModule$$$lte(p$$12, q$$9) {
  return BigNatModule$$$compare(p$$12, q$$9) !== 1;
}
export function BigNatModule$$$gte(p$$13, q$$10) {
  return BigNatModule$$$compare(p$$13, q$$10) !== -1;
}
export function BigNatModule$$$min(a$$2, b$$5) {
  if (BigNatModule$$$lt(a$$2, b$$5)) {
    return a$$2;
  } else {
    return b$$5;
  }
}
export function BigNatModule$$$max(a$$3, b$$6) {
  if (BigNatModule$$$lt(a$$3, b$$6)) {
    return b$$6;
  } else {
    return a$$3;
  }
}
export function BigNatModule$$$contributeArr(a$$4, i$$25, c$$5) {
  BigNatModule$$$contributeArr: while (true) {
    const x$$35 = op_Addition(fromInteger(a$$4[i$$25], false, 2), c$$5);
    const c$$6 = op_Division(x$$35, BigNatModule$$$baseNi64);
    const x$$38 = ~~toInt(op_BitwiseAnd(x$$35, BigNatModule$$$baseMaski64)) | 0;
    a$$4[i$$25] = x$$38;

    if (compare(c$$6, fromBits(0, 0, false)) > 0) {
      const $a$$4$$40 = a$$4;
      const $i$$25$$41 = i$$25;
      a$$4 = $a$$4$$40;
      i$$25 = $i$$25$$41 + 1;
      c$$5 = c$$6;
      continue BigNatModule$$$contributeArr;
    }

    break;
  }
}
export function BigNatModule$$$scale(k$$2, p$$14) {
  const rbound$$2 = p$$14.bound + BigNatModule$$$boundInt | 0;
  const r$$9 = BigNatModule$$$createN(rbound$$2);
  const k$$3 = fromInteger(k$$2, false, 2);

  for (let i$$26 = 0; i$$26 <= p$$14.bound - 1; i$$26++) {
    const kpi = op_Multiply(k$$3, fromInteger(p$$14.digits[i$$26], false, 2));
    BigNatModule$$$contributeArr(r$$9.digits, i$$26, kpi);
  }

  return BigNatModule$$$normN(r$$9);
}
export function BigNatModule$$$mulSchoolBookBothSmall(p$$15, q$$11) {
  const r$$11 = BigNatModule$$$createN(2);
  const rak = op_Multiply(fromInteger(p$$15, false, 2), fromInteger(q$$11, false, 2));
  BigNatModule$$$setCoeff(r$$11, 0, ~~toInt(op_BitwiseAnd(rak, BigNatModule$$$baseMaski64)));
  BigNatModule$$$setCoeff(r$$11, 1, ~~toInt(op_Division(rak, BigNatModule$$$baseNi64)));
  return BigNatModule$$$normN(r$$11);
}
export function BigNatModule$$$mulSchoolBookCarry(r$$12, c$$8, k$$4) {
  BigNatModule$$$mulSchoolBookCarry: while (true) {
    if (compare(c$$8, fromBits(0, 0, false)) > 0) {
      const rak$$1 = op_Addition(BigNatModule$$$coeff64(r$$12, k$$4), c$$8);
      BigNatModule$$$setCoeff(r$$12, k$$4, ~~toInt(op_BitwiseAnd(rak$$1, BigNatModule$$$baseMaski64)));
      const $k$$4$$43 = k$$4;
      const $r$$12$$42 = r$$12;
      r$$12 = $r$$12$$42;
      c$$8 = op_Division(rak$$1, BigNatModule$$$baseNi64);
      k$$4 = $k$$4$$43 + 1;
      continue BigNatModule$$$mulSchoolBookCarry;
    }

    break;
  }
}
export function BigNatModule$$$mulSchoolBookOneSmall(p$$16, q$$12) {
  const bp = BigNatModule$$$bound(p$$16) | 0;
  const rbound$$3 = bp + 1 | 0;
  const r$$13 = BigNatModule$$$createN(rbound$$3);
  const q$$13 = fromInteger(q$$12, false, 2);
  let c$$9 = fromBits(0, 0, false);

  for (let i$$28 = 0; i$$28 <= bp - 1; i$$28++) {
    const rak$$2 = op_Addition(op_Addition(c$$9, BigNatModule$$$coeff64(r$$13, i$$28)), op_Multiply(BigNatModule$$$coeff64(p$$16, i$$28), q$$13));
    BigNatModule$$$setCoeff(r$$13, i$$28, ~~toInt(op_BitwiseAnd(rak$$2, BigNatModule$$$baseMaski64)));
    c$$9 = op_Division(rak$$2, BigNatModule$$$baseNi64);
  }

  BigNatModule$$$mulSchoolBookCarry(r$$13, c$$9, bp);
  return BigNatModule$$$normN(r$$13);
}
export function BigNatModule$$$mulSchoolBookNeitherSmall(p$$17, q$$14) {
  const rbound$$4 = p$$17.bound + q$$14.bound | 0;
  const r$$14 = BigNatModule$$$createN(rbound$$4);
  const ra = r$$14.digits;
  const pa$$3 = p$$17.digits;
  const qa$$3 = q$$14.digits;

  for (let i$$29 = 0; i$$29 <= p$$17.bound - 1; i$$29++) {
    const pai$$1 = fromInteger(pa$$3[i$$29], false, 2);
    let c$$10 = fromBits(0, 0, false);
    let k$$5 = i$$29 | 0;

    for (let j$$1 = 0; j$$1 <= q$$14.bound - 1; j$$1++) {
      const qaj = fromInteger(qa$$3[j$$1], false, 2);
      const rak$$3 = op_Addition(op_Addition(fromInteger(ra[k$$5], false, 2), c$$10), op_Multiply(pai$$1, qaj));
      ra[k$$5] = ~~toInt(op_BitwiseAnd(rak$$3, BigNatModule$$$baseMaski64));
      c$$10 = op_Division(rak$$3, BigNatModule$$$baseNi64);
      k$$5 = k$$5 + 1;
    }

    BigNatModule$$$mulSchoolBookCarry(r$$14, c$$10, k$$5);
  }

  return BigNatModule$$$normN(r$$14);
}
export function BigNatModule$$$mulSchoolBook(p$$18, q$$15) {
  const pSmall = BigNatModule$$$bound(p$$18) === 1;
  const qSmall = BigNatModule$$$bound(q$$15) === 1;

  if (pSmall ? qSmall : false) {
    return BigNatModule$$$mulSchoolBookBothSmall(BigNatModule$$$coeff(p$$18, 0), BigNatModule$$$coeff(q$$15, 0));
  } else if (pSmall) {
    return BigNatModule$$$mulSchoolBookOneSmall(q$$15, BigNatModule$$$coeff(p$$18, 0));
  } else if (qSmall) {
    return BigNatModule$$$mulSchoolBookOneSmall(p$$18, BigNatModule$$$coeff(q$$15, 0));
  } else {
    return BigNatModule$$$mulSchoolBookNeitherSmall(p$$18, q$$15);
  }
}
export const BigNatModule$002Eencoding = declare(function BigInt_BigNatModule_encoding(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.bigL = arg1 | 0;
  this.twoToBigL = arg2 | 0;
  this.k = arg3 | 0;
  this.bigK = arg4 | 0;
  this.bigN = arg5 | 0;
  this.split = arg6 | 0;
  this.splits = arg7;
}, Record);
export function BigNatModule$002Eencoding$reflection() {
  return record("BigInt.BigNatModule.encoding", [], BigNatModule$002Eencoding, () => [["bigL", int32], ["twoToBigL", int32], ["k", int32], ["bigK", int32], ["bigN", int32], ["split", int32], ["splits", array(int32)]]);
}
export function BigNatModule$$$mkEncoding(bigL, k$$6, bigK$$2, bigN) {
  return new BigNatModule$002Eencoding(bigL, BigNatModule$$$pow32(2, bigL), k$$6, bigK$$2, bigN, ~~(BigNatModule$$$baseBits / bigL), initialize(~~(BigNatModule$$$baseBits / bigL), function (i$$30) {
    return BigNatModule$$$pow32(2, bigL * i$$30);
  }, Int32Array));
}
export const BigNatModule$$$table = [BigNatModule$$$mkEncoding(1, 28, 268435456, 268435456), BigNatModule$$$mkEncoding(2, 26, 67108864, 134217728), BigNatModule$$$mkEncoding(3, 24, 16777216, 50331648), BigNatModule$$$mkEncoding(4, 22, 4194304, 16777216), BigNatModule$$$mkEncoding(5, 20, 1048576, 5242880), BigNatModule$$$mkEncoding(6, 18, 262144, 1572864), BigNatModule$$$mkEncoding(7, 16, 65536, 458752), BigNatModule$$$mkEncoding(8, 14, 16384, 131072), BigNatModule$$$mkEncoding(9, 12, 4096, 36864), BigNatModule$$$mkEncoding(10, 10, 1024, 10240), BigNatModule$$$mkEncoding(11, 8, 256, 2816), BigNatModule$$$mkEncoding(12, 6, 64, 768), BigNatModule$$$mkEncoding(13, 4, 16, 208)];
export function BigNatModule$$$calculateTableTow(bigL$$1) {
  const k$$7 = BigNatModule$002EFFT$$$maxBitsInsideFp - 2 * bigL$$1 | 0;
  const bigK$$3 = BigNatModule$$$pow64(fromBits(2, 0, false), k$$7);
  const N = op_Multiply(bigK$$3, fromInteger(bigL$$1, false, 2));
  return [bigL$$1, k$$7, bigK$$3, N];
}
export function BigNatModule$$$encodingGivenResultBits(bitsRes) {
  const selectFrom = function selectFrom(i$$31) {
    selectFrom: while (true) {
      if (i$$31 + 1 < BigNatModule$$$table.length ? bitsRes < BigNatModule$$$table[i$$31 + 1].bigN : false) {
        const $i$$31$$44 = i$$31;
        i$$31 = $i$$31$$44 + 1;
        continue selectFrom;
      } else {
        return BigNatModule$$$table[i$$31];
      }

      break;
    }
  };

  if (bitsRes >= BigNatModule$$$table[0].bigN) {
    throw new Error("Product is huge, around 268435456 bits, beyond quickmul");
  } else {
    return selectFrom(0);
  }
}
export const BigNatModule$$$bitmask = initialize(BigNatModule$$$baseBits, function (i$$32) {
  return BigNatModule$$$pow32(2, i$$32) - 1;
}, Int32Array);
export const BigNatModule$$$twopowers = initialize(BigNatModule$$$baseBits, function (i$$33) {
  return BigNatModule$$$pow32(2, i$$33);
}, Int32Array);
export const BigNatModule$$$twopowersI64 = initialize(BigNatModule$$$baseBits, function (i$$34) {
  return BigNatModule$$$pow64(fromBits(2, 0, false), i$$34);
}, Array);
export function BigNatModule$$$wordBits(word) {
  const hi = function hi(k$$8) {
    hi: while (true) {
      if (k$$8 === 0) {
        return 0;
      } else if ((word & BigNatModule$$$twopowers[k$$8 - 1]) !== 0) {
        return k$$8 | 0;
      } else {
        const $k$$8$$45 = k$$8;
        k$$8 = $k$$8$$45 - 1;
        continue hi;
      }

      break;
    }
  };

  return hi(BigNatModule$$$baseBits) | 0;
}
export function BigNatModule$$$bits(u$$6) {
  if (u$$6.bound === 0) {
    return 0;
  } else {
    return BigNatModule$$$degree(u$$6) * BigNatModule$$$baseBits + BigNatModule$$$wordBits(u$$6.digits[BigNatModule$$$degree(u$$6)]) | 0;
  }
}
export function BigNatModule$$$extractBits(n$$27, enc, bi) {
  const bj = bi + enc.bigL - 1 | 0;
  const biw = ~~(bi / BigNatModule$$$baseBits) | 0;
  const bjw = ~~(bj / BigNatModule$$$baseBits) | 0;

  if (biw !== bjw) {
    const x$$47 = (biw < n$$27.bound ? n$$27.digits[biw] : 0) | 0;
    const y$$17 = (bjw < n$$27.bound ? n$$27.digits[bjw] : 0) | 0;
    const xbit = bi % BigNatModule$$$baseBits | 0;
    const nxbits = BigNatModule$$$baseBits - xbit | 0;
    const x$$48 = x$$47 >> xbit | 0;
    const y$$18 = y$$17 << nxbits | 0;
    const x$$49 = x$$48 | y$$18 | 0;
    const x$$50 = x$$49 & BigNatModule$$$bitmask[enc.bigL] | 0;
    return x$$50 | 0;
  } else {
    const x$$51 = (biw < n$$27.bound ? n$$27.digits[biw] : 0) | 0;
    const xbit$$1 = bi % BigNatModule$$$baseBits | 0;
    const x$$52 = x$$51 >> xbit$$1 | 0;
    const x$$53 = x$$52 & BigNatModule$$$bitmask[enc.bigL] | 0;
    return x$$53 | 0;
  }
}
export function BigNatModule$$$encodePoly(enc$$1, n$$28) {
  const poly = fill(new Uint32Array(enc$$1.bigK), 0, enc$$1.bigK, BigNatModule$002EFFT$002EFp$$$ofInt32(0));
  const biMax = n$$28.bound * BigNatModule$$$baseBits | 0;

  const encoder = function encoder(i$$38, bi$$1) {
    encoder: while (true) {
      if (i$$38 === enc$$1.bigK ? true : bi$$1 > biMax) {} else {
        const pi = BigNatModule$$$extractBits(n$$28, enc$$1, bi$$1) | 0;
        poly[i$$38] = BigNatModule$002EFFT$002EFp$$$ofInt32(pi);
        const i$$39 = i$$38 + 1 | 0;
        const bi$$2 = bi$$1 + enc$$1.bigL | 0;
        i$$38 = i$$39;
        bi$$1 = bi$$2;
        continue encoder;
      }

      break;
    }
  };

  encoder(0, 0);
  return poly;
}
export function BigNatModule$$$decodeResultBits(enc$$2, poly$$1) {
  let n$$29 = 0;

  for (let i$$40 = 0; i$$40 <= poly$$1.length - 1; i$$40++) {
    if (poly$$1[i$$40] !== BigNatModule$002EFFT$$$mzero) {
      n$$29 = i$$40;
    }
  }

  const rbits = BigNatModule$002EFFT$$$maxBitsInsideFp + enc$$2.bigL * n$$29 + 1 | 0;
  return rbits + 1 | 0;
}
export function BigNatModule$$$decodePoly(enc$$3, poly$$2) {
  const rbound$$5 = ~~(BigNatModule$$$decodeResultBits(enc$$3, poly$$2) / BigNatModule$$$baseBits) + 1 | 0;
  const r$$15 = BigNatModule$$$createN(rbound$$5);

  const evaluate = function evaluate(i$$41, j$$2, d$$3) {
    evaluate: while (true) {
      if (i$$41 === enc$$3.bigK) {} else {
        if (j$$2 >= rbound$$5) {} else {
          const x$$54 = op_Multiply(fromInteger(BigNatModule$002EFFT$002EFp$$$toInt(poly$$2[i$$41]), false, 2), BigNatModule$$$twopowersI64[d$$3]);
          BigNatModule$$$contributeArr(r$$15.digits, j$$2, x$$54);
        }

        const i$$43 = i$$41 + 1 | 0;
        const d$$4 = d$$3 + enc$$3.bigL | 0;
        const patternInput$$1 = d$$4 >= BigNatModule$$$baseBits ? [j$$2 + 1, d$$4 - BigNatModule$$$baseBits] : [j$$2, d$$4];
        i$$41 = i$$43;
        j$$2 = patternInput$$1[0];
        d$$3 = patternInput$$1[1];
        continue evaluate;
      }

      break;
    }
  };

  evaluate(0, 0, 0);
  return BigNatModule$$$normN(r$$15);
}
export function BigNatModule$$$quickMulUsingFft(u$$7, v$$5) {
  const bitsRes$$1 = BigNatModule$$$bits(u$$7) + BigNatModule$$$bits(v$$5) | 0;
  const enc$$4 = BigNatModule$$$encodingGivenResultBits(bitsRes$$1);
  const upoly = BigNatModule$$$encodePoly(enc$$4, u$$7);
  const vpoly = BigNatModule$$$encodePoly(enc$$4, v$$5);
  const rpoly = BigNatModule$002EFFT$$$computeFftPaddedPolynomialProduct(enc$$4.bigK, enc$$4.k, upoly, vpoly);
  const r$$17 = BigNatModule$$$decodePoly(enc$$4, rpoly);
  return BigNatModule$$$normN(r$$17);
}
export const BigNatModule$$$minDigitsKaratsuba = 16;
export function BigNatModule$$$recMulKaratsuba(mul, p$$19, q$$16) {
  const bp$$1 = p$$19.bound | 0;
  const bq = q$$16.bound | 0;
  const bmax = BigNatModule$$$maxInt(bp$$1, bq) | 0;

  if (bmax > BigNatModule$$$minDigitsKaratsuba) {
    const k$$9 = ~~(bmax / 2) | 0;
    const a0 = BigNatModule$$$restrictTo(k$$9, p$$19);
    const a1 = BigNatModule$$$shiftDown(k$$9, p$$19);
    const b0 = BigNatModule$$$restrictTo(k$$9, q$$16);
    const b1 = BigNatModule$$$shiftDown(k$$9, q$$16);
    const q0 = mul(a0, b0);
    const q1 = mul(BigNatModule$$$add(a0, a1), BigNatModule$$$add(b0, b1));
    const q2 = mul(a1, b1);
    const p0 = q0;
    const p1 = BigNatModule$$$sub(q1, BigNatModule$$$add(q0, q2));
    const p2 = q2;
    const r$$18 = BigNatModule$$$add(p0, BigNatModule$$$shiftUp(k$$9, BigNatModule$$$add(p1, BigNatModule$$$shiftUp(k$$9, p2))));
    return r$$18;
  } else {
    return BigNatModule$$$mulSchoolBook(p$$19, q$$16);
  }
}
export function BigNatModule$$$mulKaratsuba(x$$55, y$$19) {
  return BigNatModule$$$recMulKaratsuba(BigNatModule$$$mulKaratsuba, x$$55, y$$19);
}
export const BigNatModule$$$productDigitsUpperSchoolBook = ~~(64000 / BigNatModule$$$baseBits);
export const BigNatModule$$$singleDigitForceSchoolBook = ~~(32000 / BigNatModule$$$baseBits);
export const BigNatModule$$$productDigitsUpperFft = ~~(BigNatModule$$$table[0].bigN / BigNatModule$$$baseBits);
export function BigNatModule$$$mul(p$$20, q$$17) {
  return BigNatModule$$$mulSchoolBook(p$$20, q$$17);
}
export function BigNatModule$$$scaleSubInPlace(x$$57, f, a$$5, n$$30) {
  var x$$59;

  const invariant = function invariant(tupledArg) {};

  const xres = x$$57;
  const patternInput$$2 = [x$$57.digits, BigNatModule$$$degree(x$$57)];
  const patternInput$$3 = [a$$5.digits, BigNatModule$$$degree(a$$5)];
  const f$$1 = fromInteger(f, false, 2);
  let j$$4 = 0;
  let z$$7 = op_Multiply(f$$1, fromInteger(patternInput$$3[0][0], false, 2));

  while (compare(z$$7, fromBits(0, 0, false)) > 0 ? true : j$$4 < patternInput$$3[1]) {
    if (j$$4 > patternInput$$2[1]) {
      throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
    }

    invariant([z$$7, j$$4, n$$30]);
    let zLo = (x$$59 = z$$7, ~~toInt(op_BitwiseAnd(x$$59, BigNatModule$$$baseMaski64))) | 0;
    let zHi = op_Division(z$$7, BigNatModule$$$baseNi64);

    if (zLo <= patternInput$$2[0][j$$4 + n$$30]) {
      patternInput$$2[0][j$$4 + n$$30] = patternInput$$2[0][j$$4 + n$$30] - zLo;
    } else {
      patternInput$$2[0][j$$4 + n$$30] = patternInput$$2[0][j$$4 + n$$30] + (BigNatModule$$$baseN - zLo);
      zHi = op_Addition(zHi, fromBits(1, 0, false));
    }

    if (j$$4 < patternInput$$3[1]) {
      z$$7 = op_Addition(zHi, op_Multiply(f$$1, fromInteger(patternInput$$3[0][j$$4 + 1], false, 2)));
    } else {
      z$$7 = zHi;
    }

    j$$4 = j$$4 + 1;
  }

  ignore(BigNatModule$$$normN(xres));
}
export function BigNatModule$$$scaleSub(x$$61, f$$2, a$$7, n$$31) {
  const freshx = BigNatModule$$$add(x$$61, BigNatModule$$$zero);
  BigNatModule$$$scaleSubInPlace(freshx, f$$2, a$$7, n$$31);
  return BigNatModule$$$normN(freshx);
}
export function BigNatModule$$$scaleAddInPlace(x$$62, f$$3, a$$8, n$$32) {
  var x$$64;

  const invariant$$1 = function invariant$$1(tupledArg$$1) {};

  const xres$$1 = x$$62;
  const patternInput$$4 = [x$$62.digits, BigNatModule$$$degree(x$$62)];
  const patternInput$$5 = [a$$8.digits, BigNatModule$$$degree(a$$8)];
  const f$$4 = fromInteger(f$$3, false, 2);
  let j$$5 = 0;
  let z$$8 = op_Multiply(f$$4, fromInteger(patternInput$$5[0][0], false, 2));

  while (compare(z$$8, fromBits(0, 0, false)) > 0 ? true : j$$5 < patternInput$$5[1]) {
    if (j$$5 > patternInput$$4[1]) {
      throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
    }

    invariant$$1([z$$8, j$$5, n$$32]);
    let zLo$$1 = (x$$64 = z$$8, ~~toInt(op_BitwiseAnd(x$$64, BigNatModule$$$baseMaski64))) | 0;
    let zHi$$1 = op_Division(z$$8, BigNatModule$$$baseNi64);

    if (zLo$$1 < BigNatModule$$$baseN - patternInput$$4[0][j$$5 + n$$32]) {
      patternInput$$4[0][j$$5 + n$$32] = patternInput$$4[0][j$$5 + n$$32] + zLo$$1;
    } else {
      patternInput$$4[0][j$$5 + n$$32] = zLo$$1 - (BigNatModule$$$baseN - patternInput$$4[0][j$$5 + n$$32]);
      zHi$$1 = op_Addition(zHi$$1, fromBits(1, 0, false));
    }

    if (j$$5 < patternInput$$5[1]) {
      z$$8 = op_Addition(zHi$$1, op_Multiply(f$$4, fromInteger(patternInput$$5[0][j$$5 + 1], false, 2)));
    } else {
      z$$8 = zHi$$1;
    }

    j$$5 = j$$5 + 1;
  }

  ignore(BigNatModule$$$normN(xres$$1));
}
export function BigNatModule$$$scaleAdd(x$$66, f$$5, a$$10, n$$33) {
  const freshx$$1 = BigNatModule$$$add(x$$66, BigNatModule$$$zero);
  BigNatModule$$$scaleAddInPlace(freshx$$1, f$$5, a$$10, n$$33);
  return BigNatModule$$$normN(freshx$$1);
}
export function BigNatModule$$$removeFactor(x$$67, a$$11, n$$34) {
  const patternInput$$6 = [BigNatModule$$$degree(a$$11), BigNatModule$$$degree(x$$67)];

  if (patternInput$$6[1] < patternInput$$6[0] + n$$34) {
    return 0;
  } else {
    const patternInput$$7 = [a$$11.digits, x$$67.digits];
    let f$$6;

    if (patternInput$$6[0] === 0) {
      if (patternInput$$6[1] === n$$34) {
        f$$6 = ~~(patternInput$$7[1][n$$34] / patternInput$$7[0][0]);
      } else {
        const f64 = op_Division(op_Addition(op_Multiply(fromInteger(patternInput$$7[1][patternInput$$6[1]], false, 2), BigNatModule$$$baseNi64), fromInteger(patternInput$$7[1][patternInput$$6[1] - 1], false, 2)), fromInteger(patternInput$$7[0][0], false, 2));
        f$$6 = ~~toInt(f64);
      }
    } else if (patternInput$$6[1] === patternInput$$6[0] + n$$34) {
      f$$6 = ~~(patternInput$$7[1][patternInput$$6[1]] / (patternInput$$7[0][patternInput$$6[0]] + 1));
    } else {
      const f64$$1 = op_Division(op_Addition(op_Multiply(fromInteger(patternInput$$7[1][patternInput$$6[1]], false, 2), BigNatModule$$$baseNi64), fromInteger(patternInput$$7[1][patternInput$$6[1] - 1], false, 2)), op_Addition(fromInteger(patternInput$$7[0][patternInput$$6[0]], false, 2), fromBits(1, 0, false)));
      f$$6 = ~~toInt(f64$$1);
    }

    if (f$$6 === 0) {
      const lte = BigNatModule$$$shiftCompare(a$$11, n$$34, x$$67, 0) !== 1;

      if (lte) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return f$$6 | 0;
    }
  }
}
export function BigNatModule$$$divmod(b$$7, a$$12) {
  if (BigNatModule$$$isZero(a$$12)) {
    throw new Error();
  } else if (BigNatModule$$$degree(b$$7) < BigNatModule$$$degree(a$$12)) {
    return [BigNatModule$$$zero, b$$7];
  } else {
    const x$$68 = BigNatModule$$$copyN(b$$7);
    const d$$6 = BigNatModule$$$createN(BigNatModule$$$degree(b$$7) - BigNatModule$$$degree(a$$12) + 1 + 1);
    let p$$21 = BigNatModule$$$degree(b$$7) | 0;
    const m$$2 = BigNatModule$$$degree(a$$12) | 0;
    let n$$35 = p$$21 - m$$2 | 0;

    const Invariant = function Invariant(tupledArg$$2) {};

    let finished = false;

    while (!finished) {
      Invariant([d$$6, x$$68, n$$35, p$$21]);
      const f$$7 = BigNatModule$$$removeFactor(x$$68, a$$12, n$$35) | 0;

      if (f$$7 > 0) {
        BigNatModule$$$scaleSubInPlace(x$$68, f$$7, a$$12, n$$35);
        BigNatModule$$$scaleAddInPlace(d$$6, f$$7, BigNatModule$$$one, n$$35);
        Invariant([d$$6, x$$68, n$$35, p$$21]);
      } else {
        finished = f$$7 === 0 ? n$$35 === 0 : false;

        if (!finished) {
          if (p$$21 === m$$2 + n$$35) {
            Invariant([d$$6, x$$68, n$$35 - 1, p$$21]);
            n$$35 = n$$35 - 1;
          } else {
            Invariant([d$$6, x$$68, n$$35 - 1, p$$21 - 1]);
            n$$35 = n$$35 - 1;
            p$$21 = p$$21 - 1;
          }
        }
      }
    }

    return [BigNatModule$$$normN(d$$6), BigNatModule$$$normN(x$$68)];
  }
}
export function BigNatModule$$$div(b$$8, a$$13) {
  return BigNatModule$$$divmod(b$$8, a$$13)[0];
}
export function BigNatModule$$$rem(b$$9, a$$14) {
  return BigNatModule$$$divmod(b$$9, a$$14)[1];
}
export function BigNatModule$$$bitAnd(a$$15, b$$10) {
  const rbound$$6 = BigNatModule$$$minInt(a$$15.bound, b$$10.bound) | 0;
  const r$$19 = BigNatModule$$$createN(rbound$$6);

  for (let i$$44 = 0; i$$44 <= r$$19.bound - 1; i$$44++) {
    r$$19.digits[i$$44] = a$$15.digits[i$$44] & b$$10.digits[i$$44];
  }

  return BigNatModule$$$normN(r$$19);
}
export function BigNatModule$$$bitOr(a$$16, b$$11) {
  const rbound$$7 = BigNatModule$$$maxInt(a$$16.bound, b$$11.bound) | 0;
  const r$$20 = BigNatModule$$$createN(rbound$$7);

  for (let i$$45 = 0; i$$45 <= a$$16.bound - 1; i$$45++) {
    r$$20.digits[i$$45] = r$$20.digits[i$$45] | a$$16.digits[i$$45];
  }

  for (let i$$46 = 0; i$$46 <= b$$11.bound - 1; i$$46++) {
    r$$20.digits[i$$46] = r$$20.digits[i$$46] | b$$11.digits[i$$46];
  }

  return BigNatModule$$$normN(r$$20);
}
export function BigNatModule$$$bitXor(a$$17, b$$12) {
  const rbound$$8 = BigNatModule$$$maxInt(a$$17.bound, b$$12.bound) | 0;
  const r$$21 = BigNatModule$$$createN(rbound$$8);

  for (let i$$47 = 0; i$$47 <= a$$17.bound - 1; i$$47++) {
    r$$21.digits[i$$47] = r$$21.digits[i$$47] ^ a$$17.digits[i$$47];
  }

  for (let i$$48 = 0; i$$48 <= b$$12.bound - 1; i$$48++) {
    r$$21.digits[i$$48] = r$$21.digits[i$$48] ^ b$$12.digits[i$$48];
  }

  return BigNatModule$$$normN(r$$21);
}
export function BigNatModule$$$hcf(a$$18, b$$13) {
  const hcfloop = function hcfloop(a$$19, b$$14) {
    hcfloop: while (true) {
      if (BigNatModule$$$equal(BigNatModule$$$zero, a$$19)) {
        return b$$14;
      } else {
        const patternInput$$8 = BigNatModule$$$divmod(b$$14, a$$19);
        const $a$$19$$49 = a$$19;
        a$$19 = patternInput$$8[1];
        b$$14 = $a$$19$$49;
        continue hcfloop;
      }

      break;
    }
  };

  if (BigNatModule$$$lt(a$$18, b$$13)) {
    return hcfloop(a$$18, b$$13);
  } else {
    return hcfloop(b$$13, a$$18);
  }
}
export const BigNatModule$$$two = BigNatModule$$$embed(2);
export function BigNatModule$$$powi(x$$69, n$$36) {
  const power = function power(acc$$2, x$$70, n$$37) {
    power: while (true) {
      if (n$$37 === 0) {
        return acc$$2;
      } else if (n$$37 % 2 === 0) {
        const $acc$$2$$50 = acc$$2;
        const $n$$37$$52 = n$$37;
        const $x$$70$$51 = x$$70;
        acc$$2 = $acc$$2$$50;
        x$$70 = BigNatModule$$$mul($x$$70$$51, $x$$70$$51);
        n$$37 = ~~($n$$37$$52 / 2);
        continue power;
      } else {
        const $acc$$2$$53 = acc$$2;
        const $n$$37$$55 = n$$37;
        const $x$$70$$54 = x$$70;
        acc$$2 = BigNatModule$$$mul($x$$70$$54, $acc$$2$$53);
        x$$70 = BigNatModule$$$mul($x$$70$$54, $x$$70$$54);
        n$$37 = ~~($n$$37$$55 / 2);
        continue power;
      }

      break;
    }
  };

  return power(BigNatModule$$$one, x$$69, n$$36);
}
export function BigNatModule$$$pow(x$$71, n$$38) {
  const power$$1 = function power$$1(acc$$3, x$$72, n$$39) {
    power$$1: while (true) {
      if (BigNatModule$$$isZero(n$$39)) {
        return acc$$3;
      } else {
        const patternInput$$9 = BigNatModule$$$divmod(n$$39, BigNatModule$$$two);

        if (BigNatModule$$$isZero(patternInput$$9[1])) {
          const $acc$$3$$56 = acc$$3;
          const $x$$72$$57 = x$$72;
          acc$$3 = $acc$$3$$56;
          x$$72 = BigNatModule$$$mul($x$$72$$57, $x$$72$$57);
          n$$39 = patternInput$$9[0];
          continue power$$1;
        } else {
          const $acc$$3$$58 = acc$$3;
          const $x$$72$$59 = x$$72;
          acc$$3 = BigNatModule$$$mul($x$$72$$59, $acc$$3$$58);
          x$$72 = BigNatModule$$$mul($x$$72$$59, $x$$72$$59);
          n$$39 = patternInput$$9[0];
          continue power$$1;
        }
      }

      break;
    }
  };

  return power$$1(BigNatModule$$$one, x$$71, n$$38);
}
export function BigNatModule$$$toFloat(n$$40) {
  const basef = BigNatModule$$$baseN;

  const evalFloat = function evalFloat(acc$$4, k$$10, i$$49) {
    evalFloat: while (true) {
      if (i$$49 === n$$40.bound) {
        return acc$$4;
      } else {
        const $acc$$4$$60 = acc$$4;
        const $i$$49$$62 = i$$49;
        const $k$$10$$61 = k$$10;
        acc$$4 = $acc$$4$$60 + $k$$10$$61 * n$$40.digits[$i$$49$$62];
        k$$10 = $k$$10$$61 * basef;
        i$$49 = $i$$49$$62 + 1;
        continue evalFloat;
      }

      break;
    }
  };

  return evalFloat(0, 1, 0);
}
export function BigNatModule$$$ofInt32(n$$41) {
  return BigNatModule$$$embed(n$$41);
}
export function BigNatModule$$$ofInt64(n$$42) {
  return BigNatModule$$$embed64(n$$42);
}
export function BigNatModule$$$toUInt32(n$$43) {
  const matchValue = n$$43.bound | 0;

  switch (matchValue) {
    case 0:
      {
        return 0;
      }

    case 1:
      {
        return n$$43.digits[0] >>> 0;
      }

    case 2:
      {
        const patternInput$$10 = [n$$43.digits[0], n$$43.digits[1]];

        if (patternInput$$10[1] > BigNatModule$$$baseMask32B) {
          throw new Error();
        }

        return ((patternInput$$10[0] & BigNatModule$$$baseMask32A) >>> 0) + ((patternInput$$10[1] & BigNatModule$$$baseMask32B) >>> 0 << BigNatModule$$$baseShift32B >>> 0);
      }

    default:
      {
        throw new Error();
      }
  }
}
export function BigNatModule$$$toUInt64(n$$44) {
  const matchValue$$1 = n$$44.bound | 0;

  switch (matchValue$$1) {
    case 0:
      {
        return fromBits(0, 0, true);
      }

    case 1:
      {
        return fromInteger(n$$44.digits[0], true, 2);
      }

    case 2:
      {
        const patternInput$$11 = [n$$44.digits[0], n$$44.digits[1]];
        return op_Addition(fromInteger(patternInput$$11[0] & BigNatModule$$$baseMask64A, true, 2), op_LeftShift(fromInteger(patternInput$$11[1] & BigNatModule$$$baseMask64B, true, 2), BigNatModule$$$baseShift64B));
      }

    case 3:
      {
        const patternInput$$12 = [n$$44.digits[0], n$$44.digits[1], n$$44.digits[2]];

        if (patternInput$$12[2] > BigNatModule$$$baseMask64C) {
          throw new Error();
        }

        return op_Addition(op_Addition(fromInteger(patternInput$$12[0] & BigNatModule$$$baseMask64A, true, 2), op_LeftShift(fromInteger(patternInput$$12[1] & BigNatModule$$$baseMask64B, true, 2), BigNatModule$$$baseShift64B)), op_LeftShift(fromInteger(patternInput$$12[2] & BigNatModule$$$baseMask64C, true, 2), BigNatModule$$$baseShift64C));
      }

    default:
      {
        throw new Error();
      }
  }
}
export function BigNatModule$$$toString(n$$45) {
  const degn = BigNatModule$$$degree(n$$45) | 0;

  const route = function route(prior, k$$11, ten2k) {
    route: while (true) {
      if (BigNatModule$$$degree(ten2k) > degn) {
        return new List([k$$11, ten2k], prior);
      } else {
        const $k$$11$$64 = k$$11;
        const $prior$$63 = prior;
        const $ten2k$$65 = ten2k;
        prior = new List([$k$$11$$64, $ten2k$$65], $prior$$63);
        k$$11 = $k$$11$$64 + 1;
        ten2k = BigNatModule$$$mul($ten2k$$65, $ten2k$$65);
        continue route;
      }

      break;
    }
  };

  const kten2ks = route(new List(), 0, BigNatModule$$$embed(10));

  const collect = function collect(isLeading, digits, n$$46, _arg1$$3) {
    if (_arg1$$3.tail != null) {
      const ten2k$$1 = _arg1$$3.head[1];
      const prior$$1 = _arg1$$3.tail;
      const patternInput$$13 = BigNatModule$$$divmod(n$$46, ten2k$$1);

      if (isLeading ? BigNatModule$$$isZero(patternInput$$13[0]) : false) {
        const digits$$1 = collect(isLeading, digits, patternInput$$13[1], prior$$1);
        return digits$$1;
      } else {
        const digits$$2 = collect(false, digits, patternInput$$13[1], prior$$1);
        const digits$$3 = collect(isLeading, digits$$2, patternInput$$13[0], prior$$1);
        return digits$$3;
      }
    } else {
      const n$$47 = BigNatModule$$$eval32(n$$46) | 0;

      if (isLeading ? n$$47 === 0 : false) {
        return digits;
      } else {
        return new List(int32ToString(n$$47), digits);
      }
    }
  };

  const prior$$2 = kten2ks;
  const digits$$4 = collect(true, new List(), n$$45, prior$$2);

  if (digits$$4.tail == null) {
    return "0";
  } else {
    return join("", ...ofList(digits$$4, Array));
  }
}
export function BigNatModule$$$ofString(str) {
  const len = str.length | 0;

  if (isNullOrEmpty(str)) {
    throw new Error("empty string\\nParameter name: str");
  }

  const ten = BigNatModule$$$embed(10);

  const build = function build(acc$$5, i$$50) {
    build: while (true) {
      if (i$$50 === len) {
        return acc$$5;
      } else {
        const c$$12 = str[i$$50];
        const d$$7 = c$$12.charCodeAt(0) - "0".charCodeAt(0) | 0;

        if (0 <= d$$7 ? d$$7 <= 9 : false) {
          const $acc$$5$$66 = acc$$5;
          const $i$$50$$67 = i$$50;
          acc$$5 = BigNatModule$$$add(BigNatModule$$$mul(ten, $acc$$5$$66), BigNatModule$$$embed(d$$7));
          i$$50 = $i$$50$$67 + 1;
          continue build;
        } else {
          throw new Error();
        }
      }

      break;
    }
  };

  return build(BigNatModule$$$embed(0), 0);
}
export function BigNatModule$$$isSmall(n$$48) {
  return n$$48.bound <= 1;
}
export function BigNatModule$$$getSmall(n$$49) {
  if (0 < n$$49.bound) {
    return n$$49.digits[0] | 0;
  } else {
    return 0;
  }
}
export function BigNatModule$$$factorial(n$$50) {
  const productR = function productR(a$$20, b$$15) {
    if (BigNatModule$$$equal(a$$20, b$$15)) {
      return a$$20;
    } else {
      const m$$3 = BigNatModule$$$div(BigNatModule$$$add(a$$20, b$$15), BigNatModule$$$ofInt32(2));
      return BigNatModule$$$mul(productR(a$$20, m$$3), productR(BigNatModule$$$add(m$$3, BigNatModule$$$one), b$$15));
    }
  };

  return productR(BigNatModule$$$one, n$$50);
}
