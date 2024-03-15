


5 > 4 // true 
"apple" > "pineapple" // false 注意这个 字符串之间的比较基于字典顺序（也称为ASCII值顺序,从左到右逐个比较） 'a' 字母在 'p' 字母之前，所以 "apple" 小于 "pineapple"
"2" > "12" // true  注意这个 字符串间的比较按照字典顺序进行，而不是数值大小。在字符顺序上，字符串 "2" 的第一个字符 '2' 大于字符串 "12" 的第一个字符 '1'，因此 "2" 被认为大于 "12"
undefined == null // true
undefined === null // false 两边的值相等，而且数据类型也要一致
null == "\n0\n" // 注意这个   false  null -> 0    "\n0\n" -> \n0\n
null === +"\n0\n" // false