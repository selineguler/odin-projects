function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) throw new Error("infinity my friend");
  return a / b;
}
const operations = { "+": add, "-": subtract, "x": multiply, "/": divide };

let a = "";              
let b = "";            
let op = null;          
let lastResult = null;   


const resulter = document.getElementById("result");
const equaler  = document.getElementById("=");
const clearBtn = document.getElementById("C");


function updateDisplay(text) {
  resulter.textContent = String(text);
}
function toNumber(s) {
  return s === "" ? 0 : Number(s);
}
function formatNumber(n) {
  if (!isFinite(n)) return "Error";
  const s = Math.abs(n) >= 1e12
    ? n.toExponential(6)
    : (Number.isInteger(n) ? n.toString() : n.toPrecision(10));
  return s.replace(/(\..*?[1-9])0+$/,"$1").replace(/\.$/,"");
}
function evaluatePair(xStr, yStr, opSym) {
  if (xStr === "" || yStr === "" || !opSym) return null;
  const x = Number(xStr);
  const y = Number(yStr);
  const fn = operations[opSym];
  try {
    const raw = fn(x, y);
    const formatted = formatNumber(raw);
    return { raw, formatted };
  } catch (e) {
    if (e.message === "infinity my friend") return { raw: NaN, formatted: "No." };
    return { raw: NaN, formatted: "Error" };
  }
}

for (let i = 0; i <= 9; i++) {
  const btn = document.getElementById(i.toString());
  if (!btn) continue; 
  btn.addEventListener("click", () => {
    if (op === null) {
      a += i.toString();
      updateDisplay(a);
    } else {
      b += i.toString();
      updateDisplay(b);
    }
  });
}

function pressOperator(nextOp) {
  // if we already have a full pair, evaluate first (this is the "press 2nd operator -> show 19" moment)
  if (a !== "" && b !== "" && op !== null) {
    const res = evaluatePair(a, b, op);
    if (res) {
      lastResult = res.raw;
      updateDisplay(res.formatted);
      // prepare to chain
      a = isNaN(lastResult) ? "" : String(lastResult);
      b = "";
      op = nextOp; 
      return;
    }
  }

  if (a === "" && lastResult !== null) {
    a = String(lastResult);
  }
  op = nextOp;
}

document.getElementById("+").addEventListener("click", () => pressOperator("+"));
document.getElementById("-").addEventListener("click", () => pressOperator("-"));
document.getElementById("x").addEventListener("click", () => pressOperator("x"));
document.getElementById("/").addEventListener("click", () => pressOperator("/"));

equaler.addEventListener("click", () => {
  if (a !== "" && b !== "" && op !== null) {
    const res = evaluatePair(a, b, op);
    if (res) {
      lastResult = res.raw;
      updateDisplay(res.formatted);
      a = isNaN(lastResult) ? "" : String(lastResult);
      b = "";
      op = null;
    }
  }
});

clearBtn.addEventListener("click", () => {
  a = "";
  b = "";
  op = null;
  lastResult = null;
  updateDisplay("...");
});
