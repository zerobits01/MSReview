from django.core.mail import EmailMultiAlternatives

def send_mail(subject, from_email, to):
    text_content = 'This is an important message.'
    html_content = '<p>This is an <strong>important</strong> message.</p>'
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    # message.attach('design.png', img_data, 'image/png')
    # message.attach_file('/images/weather_map.png')
    msg.send()