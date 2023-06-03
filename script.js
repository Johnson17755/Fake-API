
let tbody = document.getElementById('tbody');

    // Fetch function
// fetch("http://localhost:3000/User")
// .then(res => res.json())
// .then(json => {
//     json.map(data => {
//         console.log(data.Profile)
//         tbody.append(td_fun(data));
//     })
// })

// // CREATE TD
//  function td_fun({Profile, Name}){
//     let td = document.createElement('tr');
//     td.innerHTML = `
//     <td class="px-6 py-4 whitespace-nowrap">
//             <div class="flex items-center">
//                 <div class="flex-shrink-0 h-10 w-10">
//                     <img src="${img}" class="h-10 w-10 rounded-full" alt="">
//                 </div>
//                 <div class="ml-4">
//                     <div class="text-sm font-medium text-gray-900">
//                         ${Name}
//                     </div>
//                     <div class="text-sm text-gray-500">
//                         Rebecca@gmail.com
//                     </div>
//                 </div>
//             </div>
//     </td>
//     <td class="px-6 py-4 whitespace-nowrap">
//         <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//             Active
//         </span>
//     </td>
//     <td class="px-6 py-4 whitespace-nowrap">
//         <span class="text-sm text-gray-500">Admin</span>
//     </td>
//     `;
//     return td
//  }

fetch("http://localhost:3000/User")
  .then(res => res.json())
  .then(json => {
    json.map(data => {
      tbody.appendChild(td_fun(data));
    });
  });

function td_fun({ Profile, Name, Email, Status, Role }) {
    let td = document.createElement('tr');
    td.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img src="${Profile}" class="h-10 w-10 rounded-full" alt="">
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              ${Name}
            </div>
            <div class="text-sm text-gray-500">
            ${Email}
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        ${Status}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-500">${Role}</span>
      </td>
    `;
    return td;
  }
  