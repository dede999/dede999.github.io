<template>
    <div id="languages" class="card horizontal deep-indigo-text blue lighten-5 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header" style="font-weight: bolder"> 
                    Idiomas
                    <i class="fas fa-language" style="font-size:40x"></i>
                </h3>
				<table class="centered highlight">
					<thead>
						<tr>
							<th> Idioma </th>
							<th> Fala </th>
							<th> Texto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> Português </td>
							<td colspan="2"> Língua Pátria </td>
						</tr>
						<tr>
							<td> Inglês </td>
							<td> Muito Bom </td>
							<td> Muito Bom </td>
						</tr>
						<tr>
							<td> Espanhol </td>
							<td> Regular </td>
							<td> Bom </td>
						</tr>
						<tr>
							<td> Italiano </td>
							<td> Iniciante </td>
							<td> Iniciante </td>
						</tr>
					</tbody>
				</table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	el: '#languages',
}
</script>

<style>

</style>
