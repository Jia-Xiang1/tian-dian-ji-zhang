const API_URL = "https://script.google.com/macros/s/AKfycbzu3Yrd-M0mnl5hLPEl49k-fIFI150SBRdzOl20A3nVBODpzBPibBB1oCQW6TzRI3aSzg/exec";

export async function addSale(data){
  await fetch(API_URL,{
    method:"POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ type:"sale", ...data })
  });
}

export async function loadSales(){
  const res = await fetch(`${API_URL}?type=sales`);
  return res.json();
}

export async function loadProducts(){
  const res = await fetch(`${API_URL}?type=products`);
  return res.json();
}
