function getMiddle(s)
{
	let i = s.length;
  return i % 2 === 0 ? s[i/2 - 1] + s[i/2] : s[i/2 - 0.5]
}
