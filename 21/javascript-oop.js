class Lecture {
  constructor (start, end) {
    this.start = start;
    this.end = end;
  }
}

class Room {
  constructor(lecture = null) {
    this.schedule = lecture === null ? [] : [lecture];
  }

  addToSchedule(lecture) {
    if(this.schedule.length === 0) 
      return this.addLecture(lecture);

    let lastScheduled = this.schedule[this.schedule.length - 1];
    if(lastScheduled.end < lecture.start)
      return this.addLecture(lecture);

    return false;
  }

  addLecture(lecture) {
    this.schedule.push(lecture);
    this.schedule.sort((first, second) => first.end - second.end)
    return true;
  }
}

function GetRooms(lectures) {
  lectures.sort((first, second) => first.start - second.start);
  let rooms = [new Room()];

  lectures.forEach(lecture => {
    let added = false;
    rooms.forEach(room => {
      if(room.addToSchedule(lecture)) added = true;
    })
    if(!added) rooms.push(new Room(lecture));
  });
  return rooms;
}

function PrintTest(expected, actual) {
  if(expected === actual) {
    return "PASS";
  }
  return "FAIL - Expected: " + expected + " Actual: " + actual;
}

function BaseTest() {
  let l1 = new Lecture(30, 75);
  let l2 = new Lecture(0, 50);
  let l3 = new Lecture(60, 150);
  let lectures = [l1, l2, l3];

  let sut = GetRooms(lectures);

  console.log(PrintTest(2, sut.length));
}

function Main() {
  BaseTest();
}

Main();