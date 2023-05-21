import { Email } from "../Email/index.js";

export const EmailSection = (props) => {
    const { heading, emails, folder } = props;
    const section = document.createElement('section')
    section.classList.add('inbox')

    section.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id="${folder}"></div>
    `

    const emailsElm = emails.map((item) => Email({
        senderName: item.sender.name,
        subject: item.subject,
        time: item.time,
        unread: item.unread,
    }))

    section.querySelector('.emails').append(...emailsElm)

    return section

};
