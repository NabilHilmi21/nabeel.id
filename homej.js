function openNavFoot() {
  document.getElementById("navThings").style.display="block"
  document.getElementById("navFooterTitle2").style.color="rgb(59, 130, 246)"
}

function closeNavFoot() {
  document.getElementById("navThings").style.display="none"
  document.getElementById("navFooterTitle2").style.color="rgb(255, 255, 255)"
}

function openRescFoot() {
  document.getElementById("navThings2").style.display="block"
  document.getElementById("rescFooterTitle2").style.color="rgb(59, 130, 246)"
}

function closeRescFoot() {
  document.getElementById("navThings2").style.display="none"
  document.getElementById("rescFooterTitle2").style.color="rgb(255, 255, 255)"
}

function openHamburg() {
  document.getElementById("hamburgerBg").style.right="0"
  document.getElementById("hamburgerBg").style.width="100%"
  document.getElementById("hamburgerBg").style.opacity="1"
}

function closeHamburg() {
  document.getElementById("hamburgerBg").style.right="-100px"
  document.getElementById("hamburgerBg").style.width="0%"
  document.getElementById("hamburgerBg").style.opacity="0"
}