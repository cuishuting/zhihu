<template>
    <div class="search">
        <div class="search_header">
            <Menu mode="horizontal" theme="light" active-name="1" width="auto" @on-select="select">
                <MenuItem name="1">
                    回答
                </MenuItem>
                <MenuItem name="2">
                    用户
                </MenuItem>
            </Menu>
        </div>
        <template v-if="selected==1">
            <SearchAnswer :text="this.$route.params.str"/>
        </template>
        <template v-else>

        </template>
    </div>
</template>

<script>
    import SearchAnswer from '../components/SearchAnswer'

    export default {
        name: "Search",
        components: {
            SearchAnswer
        },
        data() {
            return {
                selected: 1,
            }
        },
        methods: {
            select(value) {
                this.selected = value;
            }
        }
    }
</script>

<style scoped>
    .search_header {
        width: 100%;
    }

    .search {
        width: 60%;
        margin-left: 10%;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
    }

    .search_header {
        z-index: -1;
    }
</style>