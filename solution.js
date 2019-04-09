function findWord(text, data) {
  const rx = RegExp(text + '|' + Array.from(text).reverse().join(''));
  if (data.join().match(rx)) return true;
	const dataT = Array.from(data[0], (_, i) => data.map(row => row[i]).join(''));
	return !!dataT.join().match(rx);
}
