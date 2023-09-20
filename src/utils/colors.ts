export const hslToHex = (HSL: string) => {
  HSL = HSL.replaceAll('%', '');
  const [_h, _s, _l]: (string | number)[] = HSL.split(' ');

  const h = parseFloat(_h || '0');
  const s = parseFloat(_s || '0');
  let l = parseFloat(_l || '0');

  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};