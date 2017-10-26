# school-tasks

Экспериментальная среда разработки

## Как начать пользоваться?
> Необходимо использовать один из следующийх браузеров: Chrome, Firefox, Yandex или Opera
### 1. Установить [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/downloads), [Atom](https://atom.io/)
Проверить из командной строки, что все программы установились
``` bash
node -v
> v.8.6.1 (должно появиться примерно такое сообщение)

git --version 
> git version 2.11.0 (должно появиться примерно такое сообщение)
```

### 2. Перейти в командной строке на рабочий стол и скачать репозиторий себе на компьютер
``` bash
cd Desktop
git clone https://github.com/justerest/school-tasks.git
```

### 3. Перейти в папку скачанного репозитория и установить необходимые пакеты для работы программы
Выполнить в командной строке действия:
``` bash
cd school-tasks
npm i
```
Или запустить файл `school-tasks/windows/.install.bat`

Установка может занять некоторое время. Пока она продолжается, можно выполнить следующий шаг.

### 3. Настроить Atom

#### 3.1. Зайти в меню: `File -> Settings -> Install`
#### 3.2. Найти и установить плагины:
- atom-beautify
- linter-eslint (со всеми дополнительными зависимостями)
- file-icons

Установка может занять некоторое время. Главное, не выключать Atom, пока в разделе настроек Packages не появятся все вышеперечисленные плагины. Дождаться установки

#### 3.3. Перейти в раздел меню Packages (`File -> Settings -> Packages`)
- нажать на atom-beautify -> `settings` и найти в списке JavaScript
  - Отметить флажок `Beautify on Save`
  - Выбрать Brace style: `collapse-preserve-inline`
- нажать на linter-eslint -> `settings`
  - Отметить флажок `Fix errors on Save`
  - Отметить флажок `Ignore fixable rules while typing`

#### 3.4. Сочетанием клавиш `Ctrl+Shift+A` открыть папку school-tasks

#### 3.5. Найдите и откройте файл `/src/tasks/Task1.js`

### 4. Запустить локальный сервер
Выполнить в командной строке действие:
``` bash
npm run dev
```
> Команда должна быть запущена в папке `school-tasks`

Или запустить файл `school-tasks/windows/.start.bat`

- В командной строке должна появиться зелёная строчка. Если этого не произошло, проверьте [шаг 3](#3-Перейти-в-папку-скачанного-репозитория-и-установить-необходимые-пакеты-для-работы-программы). 
- После автоматически должен открыться браузер. Если этого не произошло, перейдите на http://localhost:8080 
- Перейдите по ссылке `Задание 1`

### 5. Можно программировать!

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
