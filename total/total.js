
function toggleNumberCard() {
      const paymentMethod = document.getElementById('methodpay').value;
      const numberCardSection = document.getElementById('numbercard');
      const bankingSection = document.getElementById('bank-url');
   if (paymentMethod === 'paycard') {
    numberCardSection.style.display = 'block';
    bankingSection.style.display = 'none';
  } else if (paymentMethod === 'banking') {
    bankingSection.style.display = 'block';
    numberCardSection.style.display = 'none';
  } 
  else {
    // Ẩn cả hai nếu không chọn gì
    numberCardSection.style.display = 'none';
    bankingSection.style.display = 'none';
  }
}

function accepttotal ()
{
    const numberCardSection = document.getElementById ('number');
   
     
    if (numberCardSection.value === '') {
        alert ('vui lòng nhập số thẻ');
    }
    else{
        alert ('thanh toán thành công');
    }
}
function accep(){
    const paymentMethod = document.getElementById('methodpay').value;
    if (paymentMethod==='notmethod'){
      alert ('vui lòng chọn phương thức thanh toán');
    }
}

function check(){
   const paymentMethod = document.getElementById('methodpay').value;
   if (paymentMethod ==='paycard'){
    accepttotal ()
   }
   else if (paymentMethod === 'banking'){
    alert('thanh toán thành công')
   }
  else{
    accep();
  }

}
