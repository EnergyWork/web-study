import requests as rq
import pygal as pg
from pygal.style import LightColorizedStyle as LCS, LightenStyle as LS

url = 'https://api.github.com/search/repositories?q=language:python&sort=stars'

r = rq.get(url)
print("Status code: ", r.status_code)

response_dict = r.json()
print("Total repositories: ", response_dict['total_count'])

repo_dicts = response_dict['items']
print("Repositories returned: ", len(repo_dicts))

#repo_dict = repo_dicts[0]
#print("\nKeys: ", len(repo_dict))
#for key in sorted(repo_dict.keys()):
#    print(key)

#for repo_dict in repo_dicts:
#    print("\nName: ", repo_dict['name'])
#    print("Owner: ", repo_dict['owner']['login'])
#    print("Stars: ", repo_dict['stargazers_count'])
#    print("Repository: ", repo_dict['html_url'])
#    print("Description: ", repo_dict['description'])
names, plot_dicts = [], []
for repo_dict in repo_dicts:
    names.append(repo_dict['name'])
    if repo_dict['description'] is None:
        repo_dict['description'] = 'None'
    plot_dict = {
        'value': repo_dict['stargazers_count'],
        'label': repo_dict['description'],
        'xlink': repo_dict['html_url']
    }
    plot_dicts.append(plot_dict)

my_style = LS('#333366', base_style=LCS)
my_config = pg.Config()
my_config.x_label_rotation = 45
my_config.show_legend = False
my_config.title_font_size = 24
my_config.label_font_size = 14
my_config.major_label_font_size = 18
my_config.truncate_label = 15
my_config.show_y_guides = False
my_config.width = 1000
chart = pg.Bar(my_config, style=my_style)
chart.title = 'Most-Starred Python Projects on GitHub'
chart.x_labels = names

chart.add('', plot_dicts)
chart.render_to_file('lab6\\python_repos.svg')
