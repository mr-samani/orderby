var input = document.querySelector('textarea#input');
var result = document.querySelector('pre#result');
var sortFunction = document.querySelector('input#sort-function');
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
}

function sort() {
  result.innerHTML = '';
  let list = JSON.parse(input.value);
  var f = new Function(`return ${sortFunction.value};`);
  var sorted = list.orderBy(f());
  console.log(sorted);
  result.innerHTML = JSON.stringify(sorted, '', 4);
}

init();
