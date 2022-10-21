<template>
  <div>
    <table v-table-resize @onAfterResize="onAfterResize">
      <thead>
        <th>col 1</th>
        <th>col 2</th>
        <th>col 3</th>
        <th>col 4</th>
        <th>col 5</th>
      </thead>
      <tbody>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
        <tr>
          <td>col 1</td>
          <td>col 2</td>
          <td>col 3</td>
          <td>col 4</td>
          <td>col 5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onAfterResize() {
      console.log('resized!');
    }
  }
}
</script>

<style scoped lang="scss">
table {
  margin: 0 auto;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #000;

  th,
  td {
    border: 1px solid #000;
    padding: 10px;
  }
}
</style>
