function openBRP() {
    document.getElementById("bojongRobotP").style.display = "block"
    document.getElementById("viewmoreBR").style.display = "none"
    document.getElementById("viewlessBR").style.display = "block"
}

function closeBRP() {
    document.getElementById("bojongRobotP").style.display = "none"
    document.getElementById("viewmoreBR").style.display = "block"
    document.getElementById("viewlessBR").style.display = "none"
}

function openBCP() {
    document.getElementById("bojongCodesP").style.display = "block"
    document.getElementById("viewmoreBC").style.display = "none"
    document.getElementById("viewlessBC").style.display = "block"
}

function closeBCP() {
    document.getElementById("bojongCodesP").style.display = "none"
    document.getElementById("viewmoreBC").style.display = "block"
    document.getElementById("viewlessBC").style.display = "none"
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