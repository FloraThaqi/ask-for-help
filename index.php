<?php get_header();?>
<?php 
   $field = get_field('modules');
   if (is_array($field)) {
        foreach ($field as $key => $value) {
            $module = $value[$value['acf_fc_layout']];
            include (get_template_directory().'/modules/'.$value['acf_fc_layout'].'.php');
        }
   }
get_footer();?>
