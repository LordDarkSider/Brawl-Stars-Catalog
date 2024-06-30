import json

data = ["brawlers", "rarities", "themes", "skins"]


for d in data:

    with open(d+'.json', encoding="utf-8") as file:
        json_data = json.load(file)

    js = 'let '+d+' = new Map(['


    for num,track in json_data.items():

        js += '\n    ["'+num+'", new Map(['

        for info,value in track.items():

            if info == 'titles':
                js += ' ["'+info+'", new Map(['
                for lang,title in value.items():
                    js += '["'+lang+'","'+title+'"],'
                js += ']) ],'

            else:
                js += ' ["'+info+'","'+value+'"],'

        js += ' ])],'


    js += '\n]);'

    with open(d+'.js', "w", encoding="utf-8") as file:
        file.write(js)