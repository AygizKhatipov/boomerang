// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, score) {
    const yourTeamName = 'EL LOCO';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Your score - ${score}`);
    console.log('\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
