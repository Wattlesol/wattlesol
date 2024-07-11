import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams) => {
  const serviceID = 'service_yowq95k';
  const templateID = 'template_kmgkv7f';
  const userID = '6n1lcgsUafJHarxF5';

  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('Email sent successfully:', response.status, response.text);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};