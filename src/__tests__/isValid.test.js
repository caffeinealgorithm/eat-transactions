/* eslint-disable */
import { isValid } from '../utils';

const txHash =
  '0x2d9bb5b662ffefc692f18d5672eb7cb2da0b607e201c993007c6c9c1ad09d38d';

describe('isValid function', () => {
  it('validates a correct txHash format', () => {
    expect(isValid(txHash)).toBeTruthy();
  });

  it('validates a correct txHash format (uppercase)', () => {
    expect(isValid(txHash.toUpperCase())).toBeTruthy();
  });

  it('validates a correct txHash format (without 0x)', () => {
    expect(isValid(txHash.slice(2))).toBeTruthy();
  });

  it("doesn't validate a malformed txHash (characters not allowed", () => {
    expect(isValid(txHash.replace('a', 'g'))).toBeFalsy();
  });

  it("doesn't validate a malformed txHash (length needs to be 64)", () => {
    expect(isValid(txHash.slice(4))).toBeFalsy();
  });
});
