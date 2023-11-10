document.addEventListener('DOMContentLoaded', async (e) => {
  var sidebar = document.getElementById('careers-sidebar');
  var content = document.getElementById('careers-content');

  var idData = document.getElementById('id-data');
  var id = idData.value;

  var data = await loadAllCareers();

  data.forEach((career) => {
    sidebar.innerHTML += parseSidebarItem(career, id);
    if (career.id == id) {
      content.innerHTML += parseContent(career);
    }
  });
});

function loadAllCareers() {
  return fetch('/assets/careers.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function parseSidebarItem(data, id) {
  var color = id == data.id ? data.color : '#888888';
  return `
        <a id='sidebar-item' href="./${data.id}.html">
            <div style='background-color: ${color};'></div>
            <p style='color: ${color}'>${data.name.en.toUpperCase()}</p>
        </a>
    `;
}

function parseContent(data) {
  return `
        <h3 style="font-family: 'LCK'; font-size: 4rem; color: ${
          data.color
        }">${data.name.en.toUpperCase()}</h3>
        <h6 style="font-family: 'Gilroy'; font-size: 2rem; color: ${
          data.color
        }">${data.name.vi.toUpperCase()}</h6>
        <p style="padding-top: 1.5rem">${data.description}</p>
        <button class="button cursor-pointer" style="background-color: ${
          data.color
        };">TÌM HIỂU THÊM</button>
    `;
}
