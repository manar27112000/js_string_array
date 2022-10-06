function AsciiArt(width, height, test, alphabet) {
  let arr = [];
  test=test.toUpperCase();
  for (let i = 0; i < height; i++) {
    arr.push("");
  }

  for (let j = 0; j < test.length; j++) {
    let index = (test[j].charCodeAt(0) - 65) * width;

    for (let i = 0; i < height; i++) {
      arr[i]=arr[i].concat(alphabet[i].substring(index,index + width));
    }
  }

  return arr.join("\n");
}

module.exports = AsciiArt;


/*

1- make function
2-define array to store the result in a string
3-for (height) to store empty array of strings
4-for (test.length) to turn out strings to integers 65 to upper case (* width)=> num of width 3 # and one space
5- for (height)  مش عارفه اكتبها انا هنا هقص حته من الاسترنج من اول الاندكس اللى عايزاه لاول الاندكس اللى بعده
وال كونكات دى عشان اربط الاسترنج اللى قطعته بالاراى يعنى فى البدايه الاراى دى فاضيه وخدتها وصلتها مع ال e اللى قصيته  لو بقا مثلا eg انا خزنت ف الاراى ال e خلاص هقص الg وارجع اوصلها مع الاراى تانى فهيبقا عندى  eg
6-arr.join("\n") هعمل اول سطر فى الاراي وبعدين انزل سطر عشان اشكل الحرف من غيرها كل الحروف هتكون جنب بعض

*/ 