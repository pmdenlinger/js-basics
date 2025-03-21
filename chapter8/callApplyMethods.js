//Call and Apply methods as Indirect function invocation
const computerParts = {
    name: 'Computer Parts',
    description: 'What we need to assemble a gaming computer?'
  }
  
  const mobilePhone = {
    name: 'Mobile Phone',
    description: 'What we need to build a smartphone?'
  }
  
  function assemble() {
    console.log(arguments);
    console.log("'this' is:", this);
  }
  
  assemble.call(computerParts, 
    'Motherboard', 'CPU', 'RAM','Storage','Power Supply PSU', 'System Cooling','Operating system (OS)','Gaming Peripherals','PC Case');
  
// output:
// [Arguments] 
// 0: "Motherboard"
// 1: "CPU"
// 2: "RAM"
// 3: "Storage"
// 4: "Power Supply PSU"
// 5: "System Cooling"
// 6: "Operating system (OS)"
// 7: "Gaming Peripherals"
// 8: "PC Case"
// 'this' is: { name: 'Computer Parts', description: 'What we need to assemble a gaming computer?' }
  
  assemble.apply(mobilePhone, 
    ['Display', 'Battery', 'SoC', 'Memory/Storage','Microphone','Speaker','Opeartion System','Cameras']);
  
// output:
// [Arguments] 
// 0: "Display"
// 1: "Battery"
// 2: "SoC"
// 3: "Memory/Storage"
// 4: "Microphone"
// 5: "Speaker"
// 6: "Opeartion System"
// 7: "Cameras"
// 'this' is: { name: 'Mobile Phone', description: 'What we need to build a smartphone?' }