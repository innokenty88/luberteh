# допустим, у тебя есть элемент img
img_tag = card.find('img')

# пытаемся получить реальную ссылку
img_src = img_tag.get('src') or ''
img_data_src = img_tag.get('data-src') or ''

# Выбираем картинку, которая не loading.gif
if 'loading.gif' in img_src:
    img_url = img_data_src
elif 'loading.gif' in img_data_src:
    img_url = img_src
else:
    # если ни одна не loading.gif, берем src или data-src
    img_url = img_src if img_src else img_data_src

# Добавляем базовый путь, если надо
if img_url and not img_url.startswith('http'):
    img_url = 'https://luberteh.ru' + img_url

# Если после этого всё равно загрузочный гиф — заменяем на пустую картинку или заглушку
if 'loading.gif' in img_url:
    img_url = 'https://luberteh.ru/upload/default-avatar.jpg'  # заглушка, если хочешь

