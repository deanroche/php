# dazzle works - simple

### Git Commands

```
git clone https://github.com/darrencarlin/dazzle-works-content-starter.git <new-project-name>
git remote set-url origin <new-project-url>
```

```
for d in *; do if [ -d "$d" ]; then ( cd $d && pwd && npm update --save && git add . && git commit -m "package.json updates" && git push origin master ) fi done

```
