var input = document.querySelector('textarea#input');
var result = document.querySelector('pre#result');
var sortFunction = document.querySelector('input#sort-function');
var code = document.querySelector('div.code');

var users = [
  { name: 'ali' },
  { name: 'kamran' },
  { name: 'mohhamad' },
  { name: 'reza' },
  { name: 'mohammadreza' },
  { name: 'naser' },
  { name: 'yaser' },
  { name: 'bagher' },
  { name: 'salar' },
  { name: 'hadi' },
  { name: 'hasan' },
  { name: 'asghar' },
  { name: 'shams' },
];

function init() {
  input.value = JSON.stringify(users, '', 4);
  sortFunction.value = '(o) => o.name';
  document.querySelector('button#run').addEventListener('click', sort);
  sort();
}

function sort() {
  try {
    result.innerHTML = '';
    let ascending = document.querySelector(
      'input[name="asceding"]:checked'
    ).value;
    code.innerHTML = `list.orderBy(${sortFunction.value},'${ascending}')`;
    let list = JSON.parse(input.value);
    var f = new Function(`return ${sortFunction.value};`);
    var sorted = list.orderBy(f(), ascending);
    console.log(sorted);
    result.innerHTML = JSON.stringify(sorted, '', 4);
  } catch (error) {
    code.innerHTML = error.message;
  }
}

init();
