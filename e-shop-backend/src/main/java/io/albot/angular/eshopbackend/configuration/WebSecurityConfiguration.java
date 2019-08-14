package io.albot.angular.eshopbackend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests().antMatchers("/login").permitAll()
                .antMatchers("/**").authenticated()
                .and().formLogin().loginPage("/login")
                .and().logout().invalidateHttpSession(true);
    }
}


