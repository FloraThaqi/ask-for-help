<div class="relative inline-flex float-right">
<svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648449" fill-rule="nonzero"/></svg>
  <select class="border border-gray-300 dark:border-gray-700 rounded-full text-black h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none dark:bg-[#1c2431] dark:text-white" id="filter-select">
    <option >Filter by</option>
    <option >All questions</option>
    <option >Solved</option>
    <option >Not Solved</option>
  </select>
</div>

</div>

<?php
$filter = isset($_GET['filter']) ? $_GET['filter'] : '';

if ($filter == 'solved') {
    $args['posts_per_page'] = $posts_per_page;
    $args['meta_query'] = array(
        array(
            'key' => 'close',
            'value' => 1,
        ),
    );
} elseif ($filter == 'notsolved') {
    $args['posts_per_page'] = $posts_per_page;
    $args['meta_query'] = array(
        array(
            'key' => 'close',
            'compare' => 'NOT EXISTS',
        ),
    );
} else {
    $args['posts_per_page'] = $posts_per_page;
}

$lastBlog = new WP_Query($args);
if ($lastBlog->have_posts()) {
    while ($lastBlog->have_posts()) {
        $lastBlog->the_post();

    }
    wp_reset_postdata();
}
?>              </div>


<script>
document.getElementById("filter-select").addEventListener("change", function() {
  var selectedOption = this.value;
  
  if (selectedOption === "All questions") {
    window.location.href = "?";
  } else if (selectedOption === "Solved") {
    window.location.href = "?filter=solved";
  } else if (selectedOption === "Not Solved") {
    window.location.href = "?filter=notsolved";
  }
  
  localStorage.setItem("selectedOption", selectedOption);
});

var storedOption = localStorage.getItem("selectedOption");

if (storedOption) {
  document.getElementById("filter-select").value = storedOption;
}


</script>