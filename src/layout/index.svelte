<script>
  import { Router, Route,useLocation } from 'svelte-navigator'
  import Header from '../components/header/header.svelte'
  import Home from '../views/home/home.svelte'

</script>

<div>
  <Router>
    <Header />
    <main class="container-sm mt-5">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/features">
        <div class="fs-1">Features</div>
        <p>Features is...</p>
      </Route>
      <Route path="/pricing">
        <div class="fs-1">Pricing</div>
        <p>Pricing sweet home...</p>
      </Route>
      <Route path="about">
        <div class="fs-1">About</div>
        <p>That's what it's all about!</p>
      </Route>
    </main>
  </Router>
</div>
