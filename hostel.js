let data = [
  {
    roomId: "",
    floorNo: "1",
    roomNo: "1",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "1",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "1",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "2",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "2",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "2",
    roomNo: "1",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "2",
    bedNo: "3",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "1",
    roomNo: "23",
    bedNo: "1",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "2",
    roomNo: "12",
    bedNo: "22",
    bedTypeId: 225,
  },
  {
    roomId: "",
    floorNo: "12",
    roomNo: "1",
    bedNo: "12",
    bedTypeId: 225,
  },
];

//   "roomList" = [
//     {
//       "Floor-1 RoomNo-102": [
//         {
//           "id": 22,
//           "floorNo": "1",
//           "roomNo": "102",
//           "bedNo": "1",
//           "bedType": "Consession",
//           "bedTypeId": 205
//         }
//       ]
//     },
//     {
//       "Floor-1 RoomNo-104": [
//         {
//           "id": 23,
//           "floorNo": "1",
//           "roomNo": "104",
//           "bedNo": "2",
//           "bedType": "Consession",
//           "bedTypeId": 205
//         }
//       ]
//     },
//     {
//       "Floor-1 RoomNo-103": [
//         {
//           "id": 24,
//           "floorNo": "1",
//           "roomNo": "103",
//           "bedNo": "1",
//           "bedType": "Full Paid",
//           "bedTypeId": 3
//         },
//         {
//           "id": 25,
//           "floorNo": "1",
//           "roomNo": "103",
//           "bedNo": "2",
//           "bedType": "USA",
//           "bedTypeId": 33
//         }
//       ]
//     }
//   ]

const roomList = [];

data.forEach((item) => {
  const floorNo = item.floorNo;
  const roomNo = item.roomNo;
  const key = `Floor-${floorNo} RoomNo-${roomNo}`;

  const existName = roomList.find((entry) => Object.keys(entry)[0] === key);
  if (existName) {
    existName[key]?.push(item);
  } else {
    roomList.push({ [key]: [item] });
  }
});

// const resultArray = Object.values(groupedData);
// console.log(groupedData);
// console.log(roomList);

// {
//     "Floor-1 RoomNo-1": [
//         {
//             "roomId": "",
//             "floorNo": "1",
//             "roomNo": "1",
//             "bedNo": "1",
//             "bedTypeId": 225
//         }
//     ],
//     "Floor-2 RoomNo-1": [
//         {
//             "roomId": "",
//             "floorNo": "2",
//             "roomNo": "1",
//             "bedNo": "1",
//             "bedTypeId": 225
//         }
//     ],
//     "Floor-1 RoomNo-2": [
//         {
//             "roomId": "",
//             "floorNo": "1",
//             "roomNo": "2",
//             "bedNo": "3",
//             "bedTypeId": 225
//         }
//     ],
//     "Floor-1 RoomNo-23": [
//         {
//             "roomId": "",
//             "floorNo": "1",
//             "roomNo": "23",
//             "bedNo": "1",
//             "bedTypeId": 225
//         }
//     ],
//     "Floor-2 RoomNo-12": [
//         {
//             "roomId": "",
//             "floorNo": "2",
//             "roomNo": "12",
//             "bedNo": "22",
//             "bedTypeId": 225
//         }
//     ],
//     "Floor-12 RoomNo-1": [
//         {
//             "roomId": "",
//             "floorNo": "12",
//             "roomNo": "1",
//             "bedNo": "12",
//             "bedTypeId": 225
//         }
//     ]
// }

let originalData = [
  {
    "Floor-1 RoomNo-1": [
      {
        id: 13,
        floorNo: "1",
        roomNo: "1",
        bedNo: "12",
        bedType: "Single Bed",
        bedTypeId: 225,
      },
      {
        id: 16,
        floorNo: "1",
        roomNo: "1",
        bedNo: "1",
        bedType: "Three Bed",
        bedTypeId: 227,
      },
    ],
  },
  {
    "Floor-2 RoomNo-1": [
      {
        id: 14,
        floorNo: "2",
        roomNo: "1",
        bedNo: "1",
        bedType: "Single Bed",
        bedTypeId: 225,
      },
    ],
  },
  {
    "Floor-1 RoomNo-2": [
      {
        id: 15,
        floorNo: "1",
        roomNo: "2",
        bedNo: "1",
        bedType: "Single Bed",
        bedTypeId: 225,
      },
    ],
  },
  {
    "Floor-12 RoomNo-12": [
      {
        id: 17,
        floorNo: "12",
        roomNo: "12",
        bedNo: "12",
        bedType: "Three Bed",
        bedTypeId: 227,
      },
    ],
  },
];

const transformedData = originalData.flatMap((floor) =>
  Object.entries(floor).map(([roomKey, roomData]) =>
    roomData.map((bed) => ({
      roomId: bed.id,
      floorNo: bed.floorNo,
      roomNo: bed.roomNo,
      bedNo: bed.bedNo,
      bedTypeId: bed.bedTypeId,
    }))
  )
);


let data1 = [];
// console.log(originalData);

originalData.forEach((floorData) => {
  console.log(floorData)
  Object.entries(floorData).forEach(([roomKey, beds]) => {
    
    console.log(beds)
    beds.forEach((bed) => {
      data1.push({
        roomId: bed.id.toString(), // or any appropriate value for roomId
        floorNo: bed.floorNo,
        roomNo: bed.roomNo,
        bedNo: bed.bedNo,
        bedTypeId: bed.bedTypeId,
      });
    });
  });
});

console.log(data1);
