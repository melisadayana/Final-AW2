export const card =(title, desc, price, id, img)=>{
    return `
    <div class="col-span-1 flex">
        <div class="bg-purple-500 flex flex-col rounded-3xl  w-full h-full hover:shadow-xl">
            <div class="flex-grow">
                <img src=${img} alt=${title} class="object-cover w-full h-48 rounded-t-xl">
            </div>
            <div class="p-3 text-white">
                <div class="flex justify-between">
                    <h1 class="text-4xl ">${title}</h1>
                    <p class="bg-purple-700 p-2 rounded-xl shadow-purple-400">desde $${price}</p>
                </div>
                <p class="my-5">${desc}</p>
                <div class="flex items-center justify-between gap-5">
                    <button name="btnCity" data-city="${id}" class="bg-purple-100 p-2 rounded-xl text-purple-500 font-semibold hover:bg-purple-50 w-full text-center">Ver mas</button>
                </div>
            </div>
        </div>
    </div>
    `
} 
    