import urllib2
import json
from bs4 import BeautifulSoup

quote_page = 'https://stardewvalleywiki.com/Sam'
page = urllib2.urlopen(quote_page)

soup = BeautifulSoup(page, 'html.parser')
table = soup.find_all(id='roundedborder')
tables = soup.find_all('table', {'class': 'mw-collapsible'})


for b in tables:
    for c in b.find_all('th'):
        # get schedule titles
        if 'span' in str(c):
            print(c.text.strip())
    tbody = b.find('tbody')
    print(tbody)

# print(beaver)
monster_names = []

class Monster(object):
    name = ""
    monster_type = ""
    location = ""
    image = "/imgs/eggs/"
    obtained = "false"
#
#class Group(object):
#    location = ""
#    monsters = []
#
#for name in monster_name:
#    name_text = name.text.strip()
#    if (name_text != ''):
#        nameArray = name_text.split(" - ")
#        monster = {}
#        monster['name'] = nameArray[1].strip()
#        monster_names.append(monster)
#
#        filename2 = ''.join(x for x in monster['name'].title() if not x.isspace())
#
#        monster['image'] = "/imgs/eggs/"+filename2.lower()+".jpg"
#        print(filename2.lower())
#        monster['obtained'] = "false"
#
#locations = soup.find_all('li')
#i = 1
#j = 0
#
#
#for i in range(32, 153, 2):
#    # print(locations[i].text.strip())
#    monster = monster_names[j]
#    monster['monster_type'] = locations[i].text.strip()
#
#    location_name = locations[i+1].text.strip().split(":")
#    monster['location'] = location_name[1].strip()
#    j += 1
#    # print(locations[i].text.strip())
#
## for a in monster_names:
##    print(a['name'])
#
#group = []
#
#for a in monster_names:
#    if any(x.location == a['location'] for x in group):
#        test = next((x for x in group if x.location == a['location']), None)
#        a.pop('location')
#        test.monsters.append(a)
#    else:
#        new_group = Group()
#        new_group.location = a['location']
#        a.pop('location')
#        new_group.monsters = [a]
#        group.append(new_group)

# for w in group:
#     print(w.location, len(w.monsters))
# 
# with open('data.json', 'w+') as outfile:
#    json_string = [a.__dict__ for a in group]
#    print(json_string)
#    outfile.write(json.dumps(json_string, indent=2))
