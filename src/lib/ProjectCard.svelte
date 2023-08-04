<script>
    import ProjectCard from '$lib/ProjectCard.svelte';
    import projects from '../data/selected_works.json';
</script>

<div class="projects-grid">
    {#each projects as project (project.id)}
        <ProjectCard {project} />
    {/each}
</div>

<style>
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
</style>
