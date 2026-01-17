// upload.js
const API_URL = "https://script.google.com/macros/s/AKfycbzu3Yrd-M0mnl5hLPEl49k-fIFI150SBRdzOl20A3nVBODpzBPibBB1oCQW6TzRI3aSzg/exec";

// 新增銷售
export async function addSaleCloud(sale){
  await fetch(API_URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ type:"sale", ...sale })
  });
}

// 讀取銷售
export async function loadSalesCloud(){
  const res = await fetch(`${API_URL}?type=sales`);
  return res.json();
}

// 讀取商品
export async function loadProductsCloud(){
  const res = await fetch(`${API_URL}?type=products`);
  return res.json();
}

// 新增商品
export async function addProductCloud(product){
  await fetch(API_URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ type:"product", ...product })
  });
}

// 更新商品
export async function updateProductCloud(name, field, value){
  await fetch(API_URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ type:"updateProduct", name, field, value })
  });
}

// 刪除商品
export async function delProductCloud(name){
  await fetch(API_URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ type:"deleteProduct", name })
  });
}

// 刪除銷售
export async function delSaleCloud(date, product, user){
  await fetch(API_URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ type:"deleteSale", date, product, user })
  });
}
