
# systemPipeShiny <img src="https://github.com/systemPipeR/systemPipeShiny-book/blob/master/img/sps.png?raw=true" align="right" height="139" />

<!-- badges: start -->
![R-CMD-check](https://github.com/systemPipeR/systemPipeShiny/workflows/R-CMD-check/badge.svg)
<!-- badges: end -->

`systemPipeShiny`(SPS) a Shiny-based R/Bioconductor package that extends the widely used 
[systemPipeR](http://www.bioconductor.org/packages/release/bioc/html/systemPipeR.html) workflow 
environment with data visualization and a versatile graphical user interface. 
SPS can work as a general framework to build custom web apps on data analysis and visualization.
Besides, SPS provides many developers' tool that are distributed as [separate packages](#other-packages-in-systempipeshiny). 

## Demos
SPS has provided a variety of options to change how it work. Here are some examples.

| Type and link| option changed | notes |
| --- | --- | --- |
| [Default full installation](https://tgirke.shinyapps.io/systemPipeShiny/) |  |  |
| [Minimum installation](https://tgirke.shinyapps.io/systemPipeShiny/) |  |  |
| [Login enabled](https://tgirke.shinyapps.io/systemPipeShiny_loading/) | `login_screen = TRUE; login_theme = "empty"` | no modules installed |
| [Login and login themes](https://tgirke.shinyapps.io/systemPipeShiny_loading_theme/) | `login_screen = TRUE` | no modules installed |
| [App admin page](https://tgirke.shinyapps.io/systemPipeShiny_loading/?admin) | `admin_page = TRUE` | simply add "?admin" to the end of URL of demos |

For the login required demos, the app account name is **"user"** password **"user"**.

For the admin login, account name **"admin"**, password **"admin"**.

## [Documents](https://systempipe.org/sps/)

To see all the details of SPS, read the user manual on [our website](https://systempipe.org/sps/).

## Installation

### Full

``` r
if (!requireNamespace("BiocManager", quietly=TRUE))
    install.packages("BiocManager")
BiocManager::install("systemPipeShiny", dependencies=TRUE)

```
This will install **all** required packages including suggested packages that 
are required by the core modules. Be aware, it will take quite some time if you 
are installing on Linux where only source installation is available. Windows and Mac
binary installations will be much faster. 

### Minimum

To install the package, please use the `BiocManager::install` command:

``` r
if (!requireNamespace("BiocManager", quietly=TRUE))
    install.packages("BiocManager")
BiocManager::install("systemPipeShiny")

```

By the minimum installation, all the 3 core modules are not installed. You 
can still start the app, and When you start the app and click on these modules, 
it will tell to enable these modules, what packages and command you need to run. 
Just follow the instructions. So, install as you need.

### Most recent 

To obtain the most recent updates immediately, one can install it directly from 
[GitHub](https://github.com/systemPipeR/systemPipeShiny) as follow:

``` r
if (!requireNamespace("remotes", quietly=TRUE))
    install.packages("remotes")
remotes::install("systemPipeR/systemPipeShiny", dependencies=TRUE)
```

### Linux

If you are on Linux, you may also need the following libraries **before installing SPS**.
Different distributions 
may have different commands, but the following commands are examples for Ubuntu:

```
sudo apt-get install libcurl4-openssl-dev
sudo apt-get install libv8-dev
sudo apt-get install libxm12-dev
sudo apt-get install libssl-dev
```

## Quick start

This is a basic example which shows how to use `systempipeShiny` package:

``` r
## Imports the library
library(systemPipeShiny)
## Creates the project directory
spsInit()
```

By default, a project folder is created and named as `SPS_`+`DATE`. 
This project folder provides all the necessary files to launch the application. 
If you are using Rstudio, `global.R` file will be opened automatically and this is 
the only file you may need to make custom changes if there is any.

Click the green "Run App" button in Rstudio if you are on the `global.R` file or 
run following in console to start the app. 

``` r
## Launching the interface
shiny::runApp()
```

### options
Change some of the options listed in `global.R` will change how the app behave. Here
is a quick look and their defaults of these options:

```r
options(sps = list(
    title = "systemPipeShiny",
    title_logo = "img/sps_small.png",
    mode = "local",
    warning_toast = FALSE,
    login_screen = FALSE,
    login_theme = "random",
    use_crayon = TRUE,
    verbose = FALSE,
    admin_page = TRUE,
    admin_url = "admin",
    note_url = 'https://raw.githubusercontent.com/systemPipeR/systemPipeShiny/master/inst/remote_resource/notifications.yaml',
    tab_welcome = TRUE,
    tab_vs_main = TRUE,
    tab_canvas = TRUE,
    tab_about = TRUE,
    module_wf = TRUE,
    module_rnaseq = TRUE,
    module_ggplot = TRUE,
    traceback = FALSE
))
```

## Other packages in systemPipeShiny

| Package | Description | Documents | Function reference | Demo |
| --- | --- | --- | :---: | --- |
|<img src="https://github.com/systemPipeR/systemPipeR.github.io/blob/main/static/images/sps_small.png?raw=true" align="right" height="30" width="30"/>[systemPipeShiny](https://github.com/systemPipeR/systemPipeShiny) | SPS main package |[website](https://systempipe.org/sps/)|[link](https://systempipe.org/sps/funcs/sps/reference/)  | [demo](https://tgirke.shinyapps.io/systemPipeShiny/)|
|<img src="https://github.com/systemPipeR/systemPipeR.github.io/blob/main/static/images/spscomps.png?raw=true" align="right" height="30" width="30" />[spsComps](https://github.com/lz100/spsComps) | SPS UI and server components |[website](https://systempipe.org/sps/dev/spscomps/)|[link](https://systempipe.org/sps/funcs/spscomps/reference/)  | [demo](https://lezhang.shinyapps.io/spsComps)|
|<img src="https://github.com/systemPipeR/systemPipeR.github.io/blob/main/static/images/drawer.png?raw=true" align="right" height="30" width="30" />[drawer](https://github.com/lz100/drawer) | SPS interactive image editing tool |[website](https://systempipe.org/sps/dev/drawer/)|[link](https://systempipe.org/sps/funcs/drawer/reference/)  | [demo](https://lezhang.shinyapps.io/drawer)|
|<img src="https://github.com/systemPipeR/systemPipeR.github.io/blob/main/static/images/spsutil.png?raw=true" align="right" height="30" width="30" />[spsUtil](https://github.com/lz100/spsUtil) | SPS utility functions |[website](https://systempipe.org/sps/dev/spsutil/)|[link](https://systempipe.org/sps/funcs/spsutil/reference/)  | NA|


## Contact & contributions
 
Please use https://github.com/systemPipeR/systemPipeShiny/issues for reporting bugs, 
issues or for suggesting new features to be implemented.

We'd love to hear from all users and developers. Submit your pull request if you 
have new thoughts or improvements. 

