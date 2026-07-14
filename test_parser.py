from html.parser import HTMLParser
class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_script = False
    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            self.in_script = True
            print('start script at', self.getpos())
    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_script = False
            print('end script at', self.getpos())
    def handle_data(self, data):
        if 'printWindow.document.close' in data:
            print('Found target string inside tag!', 'in_script:', self.in_script, 'at', self.getpos())

p = MyParser()
p.feed(open('builder.html', encoding='utf8').read())
