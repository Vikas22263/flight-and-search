function compareTime(timedate1, timedate2) {
  let dateTime1 = new Date(timedate1);
  let dateTime2 = new Date(timedate2);
  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports=compareTime