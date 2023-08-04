<script context="module">
    import data from '../../../data/selected_works.json';

    export async function load({ params }) {
        const id = params.id;
        const project = data.find(item => item.id === id);

        return {
            props: {
                project
            }
        };
    }
</script>

<script>
    export let project;
</script>

<h1>{project.title}</h1>
<p>{project.details}</p>
<img src="{project.thumbnail}" alt="{project.title}">
