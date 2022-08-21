import { Task } from "./Task";
export const TASKS:Task[]=
[
    {
        id:"91f2c6a9-0e58-42d0-b118-302526cde889",
        text:'My dentist appointment',
        day:new Date("2019-01-06"),
        reminder:true
    },
    {
        id:"c495e39e-22a7-46d5-ad8a-d6c77b431a28",
        text:'Feed the cat',
        day:new Date("2012-12-20"),
        reminder:true
    },
    {
        id:"e8c81df4-afe0-4345-94a1-666e441d5a70",
        text:'Water the plants',
        day:new Date("2022-01-06"),
        reminder:false
    },
    {
        id:"f8a8cd03-314e-4f4d-af81-ec0655e12650",
        text:'Interview',
        day:new Date("2021-05-10"),
        reminder:false
    },
]