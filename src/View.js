// Сделаем отдельный класс для отображения игры в консоли.
const inquirer = require('inquirer');

class View {
  async newNickname() {
    const answer = await inquirer.default.prompt({
      type: 'input',
      name: 'nickname',
      message: 'Введите никнейм:',
    });
    return answer.nickname;
  }
  async newSkin() {
    const heroSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'];
    const choices = heroSkin.map((el, index) => ({
        name: el,
        value: index
    }));
    const playerChoises = await inquirer.default.prompt({
        type: 'list',
        name: 'skin',
        message: 'Выберите скин:',
        choices: choices,
      });
      return playerChoises['skin'];
  }

  static async Results() {
    const heroSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'];
    const nickname = await this.newNickname();
    const skinIndex = await this.newSkin();

    const chosenSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'][skinIndex];

    return ({ nickname, emoji:heroSkin[skinIndex] });
  }
}

const view = new View();
view.Results();

module.exports = View;
