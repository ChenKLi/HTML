for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= 0; j--) {
    let str = " ".repeat(j);
    let str2 = "*".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}
