function generateId( age = 0, sex = "random" ) {
  // 地址码（随便选了北京市朝阳区）
  const addressCode = "110105";

  // 计算出生日期范围
  const now = new Date();
  const end = now.getTime();
  const start = new Date(
    now.getFullYear() - age,
    now.getMonth(),
    now.getDate()
  ).getTime();

  const birthday = new Date(start + Math.random() * (end - start));
  const year = birthday.getFullYear();
  const month = (birthday.getMonth() + 1).toString().padStart(2, "0");
  const day = birthday.getDate().toString().padStart(2, "0");
  const birthCode = `${year}${month}${day}`;

  // 顺序码（后三位，最后一位表示性别）
  let seqCode;
  while (true) {
    const code = Math.floor(Math.random() * 999)
      .toString()
      .padStart(3, "0");
    const lastDigit = parseInt(code[2]);
    if (
      sex === "random" ||
      (sex === "male" && lastDigit % 2 === 1) ||
      (sex === "female" && lastDigit % 2 === 0)
    ) {
      seqCode = code;
      break;
    }
  }

  const partialId = addressCode + birthCode + seqCode;

  // 校验码计算
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(partialId[i]) * weights[i];
  }

  const checkCode = checkCodes[sum % 11];

  return partialId + checkCode;
}
console.log(generateId(98, "female"));
