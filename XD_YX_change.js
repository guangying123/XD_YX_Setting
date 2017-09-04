/**
 * @file
 * @author yangguang.chang
 */
//将下面函数复制，直接在浏览器的console中执行，传入你的参数即可
//电信翼讯
//账号格式  {SRUN2}x***********@dx
//其中的11位*代表是你的学号+4得到的字符（通过ascii码计算）
//该函数根据你传入的学号(字符串形式传入) 如 count = '14030130040';
//密码 身份证号后6位  如果末尾为X，往前推一位
function XD_YX_change(count) {
    if(!count || count.length !== 11)
        return new Error('输入必须为你自己的11位学号');
    let stand = '456789:;<=';
    let result='';
    for(let i = 0;i < 11;i++) {
        result+=stand.charAt(Number(count.charAt(i)));
    }
    result = '{SRUN2}x' + result + '@dx';
    return result;
}

