const moment = require('moment');

const classEmailStudentContent = (emailData, meetingData) => {
  const meetingUrl = `${process.env.APP_URL}meeting?student=${emailData.user._id}&class=${emailData.slotId}`;
  let name = '';
  if (emailData.user.fullName) name = emailData.user.fullName;
  else if (emailData.user.firstName) name = `${emailData.user.firstName} ${emailData.user.lastName}`;
  const emailContent = meetingData
    ? `<h2 style="text-align:center"><b>CONGRATULATIONS🥳</b></h2><br />
      <h3 style="text-align:left">Dear ${name ?? 'User'}, <br /> <br />
      Your ${emailData.isTrial ? 'free trial class' : `class`} of <b>${
        emailData.title
      }</b> for one hour has been booked successfully🤩 </h3>  <br />
      <h3 style="text-align:left">Here's the class schedule: <br /> <br />
      📅 ${moment(new Date(emailData.startDate)).tz(emailData.user.timeZone).format('YYYY-MM-DD')} ⏰ ${moment(
        new Date(emailData.startDate)
      )
        .tz(emailData.user.timeZone)
        .format('hh:mm')} to ${moment(new Date(emailData.endDate)).tz(emailData.user.timeZone).format('hh:mm')} <br /> </h3>
        <a href='${meetingUrl}' target="_parent">
        <button
        style='background-color: #F46F5C;  
        border: none;
        border-radius: 5px;
        color: white;
        padding: 10px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;'>Join Class</button></a>
        ${
          emailData.isTrial
            ? `
      <div style='display:flex; margin-top:10px;'>
       <div>
        <h3 style="text-align:left"><b>During Trial class you will get 🎉 </b></h3>
        <h3 style="text-align:left"> 1. Course Introduction <br />
        2. Personal guidance from our STEM Expert  <br />
        3. Real time activity based Project practice </h3> <br />

       <h3 style="text-align:left"><b>After Trial class you will get 🎉 </b><br />
       📋Certification of Completion</h3>  <br />
       </div>
       <div style='margin: 0 0 0 30px;'>
       <img
       height='200'
       width='200'
       src='https://teenycoders.com/wp-content/uploads/2023/01/ei_1674804409431-removebg-preview.png'
       alt='Teeny Coders Avatar'
     /></div>
     </div>`
            : ''
        }
      <h3 style="text-align:left"><b>Note: Please prepare your PC/ Laptop 💻 to enjoy the amazing experience of class. </b> </h3> <br />

      <h3 style="text-align:left">To explore the Teeny coders world please click on this link: ${
        process.env.TEENY_CODERS_YOUTUBE_URL
      } </h4> <br />

      <h3 style="text-align:left">If you have any further query please contact ${
        process.env.TEENY_CODERS_EMAIL
      } </h3>  <br />

      <h3 style='text-align:left; color: #F46F5C'><b>Producing TechLeaders for Future</b></h3>
       <h3 style='text-align:left; color: #4C82DF'><b>TEENY CODERS</b></h3><br />`
    : 'There is some issue in enrollments. Please contact support.';
  return emailContent;
};

const classEmailTeacherContent = (emailData, meetingData) => {
  let name = '';
  if (emailData.user.fullName) name = emailData.user.fullName;
  else if (emailData.user.firstName) name = `${emailData.user.firstName} ${emailData.user.lastName}`;
  const emailContent = meetingData
    ? `<h2 style="text-align:center"><b>CONGRATULATIONS🥳</b></h2><br />
      <h3 style="text-align:left">Dear ${name ?? 'User'}, <br /> <br />
      A new student has booked ${emailData.isTrial ? 'free trial class' : `class`} of <b>${
        emailData.title
      }</b> for one hour.🤩<br />
      Please start your class on time by clicking on start class button. </h3>  <br />
      <h3 style="text-align:left">Here's the class schedule: <br /> <br />
      📅 ${moment(new Date(emailData.startDate)).tz(emailData.user.timeZone).format('YYYY-MM-DD')} ⏰ ${moment(
        new Date(emailData.startDate)
      )
        .tz(emailData.user.timeZone)
        .format('hh:mm')} to ${moment(new Date(emailData.endDate)).tz(emailData.user.timeZone).format('hh:mm')}<br /></h3>
        <a href='${meetingData.start_url}' target="_parent">
        <button
        style='background-color: #F46F5C;  
        border: none;
        border-radius: 5px;
        color: white;
        padding: 10px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;'>Start Class</button></a> <br />

      <h3 style="text-align:left">In case of any issue, please contact on whatsapp or send email at ${
        process.env.TEENY_CODERS_EMAIL
      }</h3><br />

      <h3 style="text-align:left">To explore the Teeny coders world please click on this link: https://www.youtube.com/@teenycoders1756 </h4> <br />

      <h3 style='text-align:left; color: #F46F5C'><b>Producing TechLeaders for Future</b></h3>
       <h3 style='text-align:left; color: #4C82DF'><b>TEENY CODERS</b></h3><br />`
    : 'There is some issue in trial class booking. Please contact support.';
  return emailContent;
};

module.exports = {
  classEmailStudentContent,
  classEmailTeacherContent,
};
