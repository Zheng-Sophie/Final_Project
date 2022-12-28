String.prototype.asclen = function() {
    var a = this;
    return a.replace(/[^\x00-\xff]/g, "**").length
}
;
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}
;
function checkempty(b) {
    if (b.length == 0)
        return false;
    var a = 0;
    while (a < b.length) {
        if (b.substring(a, a + 1) != " ")
            return true;
        a = a + 1
    }
    return false
}
function replaceAll(a, b, d) {
    var c = a.indexOf(b);
    while (c > -1) {
        a = a.replace(b, d);
        c = a.indexOf(b)
    }
    return a
}
function addLoadEvent(b) {
    var a = window.onload;
    if (a == null || typeof window.onload != "function")
        window.onload = b;
    else
        window.onload = function() {
            a();
            b()
        }
}
var Bgt = 0;
function setBgSize() {
    var a = document.body.clientWidth
      , b = document.body.clientHeight;
    document.getElementById("Image1").width = a;
    document.getElementById("Image1").height = b;
    document.getElementById('if1').style.width = (a / 3) - 50;
    document.getElementById('if2').style.width = (a / 3) - 50;
    var c = b - 290;
    if (c < 100) {
        c = 100
    }
    ;document.getElementById('if1').style.height = c;
    document.getElementById('if2').style.height = c;
    document.getElementById("pn1").style.width = a / 4;
    if (Bgt == 0) {
        setTimeout("setBgSize()", 1000);
        Bgt = 1
    }
}
function setNewsIframe(a) {
    document.all.if1.src = a
}
function setinfocus(a) {
    if (document.getElementById(a).disabled != 1) {
        document.getElementById(a).focus();
        document.getElementById(a).select()
    }
}
function setIETitle(a) {
    top.document.title = a
}
function setTitle(a, d) {
    var c = screen.width;
    if (c == 1024)
        w1 = 512;
    else
        w1 = 400;
    var f = (c - w1) / 2 + 100
      , e = a.length
      , b = 24;
    document.write("<div style='Position:absolute;z-index:22;width:98%;text-align:center;top:15px;font-size:" + b + "pt;font-family:" + d + ";color:#673D0E'>" + a + "</div>");
    document.write("<div style='Position:absolute;z-index:21;width:98%;text-align:center;top:17px;left:2px;font-size:" + b + "pt;font-family:" + d + ";color:white'>" + a + "</div>")
}
function checkdel1(a) {
    if (!confirm(a))
        return false
}
function checktodo(b, a) {
    if (confirm(b)) {
        if (a != "")
            if (!confirm(a))
                return false
    } else
        return false
}
function getFileExt(a) {
    var b = a.lastIndexOf(".");
    return a.substr(b + 1, 4).toLowerCase()
}
function isPicExt(a) {
    return a != "jpg" && a != "gif" && a != "png" && a != "bmp" && a != "jpeg" && a != "ico" ? false : true
}
function showauthenimg1(a, c) {
    if (checkempty(a) == 0)
        document.all.nowaimg1.innerHTML = '<img src="' + c + 'authen.gif" width="25" height="20">';
    else {
        var b = getFileExt(a);
        if (isPicExt(b) == 0)
            document.all.nowaimg1.innerHTML = "<font color=red>not image</font>";
        else
            document.all.nowaimg1.innerHTML = '<img src="' + a + '" width="25" align=absmiddle>'
    }
    document.all.ailib.value = ""
}
function showauthenimg2(a, b) {
    window.opener.document.all.nowaimg1.innerHTML = '<img src="' + b + a + '" width="25">';
    window.opener.document.all.ailib.value = a;
    window.opener.document.all.autFile1.value = "";
    window.close()
}
function checkisbns1(a) {
    return a >= 48 && a <= 57 || (a == 45 || a == 88 || a == 120 || a == 13) ? true : false
}
function checkisbns2(c) {
    var d = c.value, b = "", a;
    for (i = 0; i < d.length; i++) {
        a = d.substring(i, i + 1);
        if (a >= "0" && a <= "9" || (a == "-" || a == "x" || a == "X" || a == "\n"))
            b = b + a
    }
    c.value = b
}
function checkmodall(a, b) {
    if (confirm(a)) {
        if (!confirm(b))
            return false
    } else
        return false
}
function checkallp(b) {
    for (i = 2; i < 46; i++)
        if (i != 3 && i != 7) {
            var a = eval("document.all.CheckBox" + i);
            if (a != null && a != undefined)
                a.checked = b.checked
        }
    if (document.all.CheckBox1.checked) {
        document.all.CheckBox45.checked = 0;
        document.all.CheckBox46.disabled = 0;
        document.all.CheckBox46.checked = 1;
        document.all.chkidentity.disabled = 0
    } else {
        document.all.CheckBox46.checked = 0;
        document.all.CheckBox46.disabled = 1;
        document.all.chkidentity.disabled = 1
    }
    document.all.CheckBox8b.checked = 0;
    document.all.CheckBox9b.checked = 0;
    modistaall();
    for (i = 0; i <= 9; i++) {
        var a = eval("document.all.cba" + i);
        a.checked = b.checked
    }
}
function uncheck1(d) {
    var a = [];
    a[0] = "#3#4#5#6#";
    a[1] = "#7#8#9#36#41#";
    a[2] = "#10#11#12#13#";
    a[3] = "#14#15#16#17#";
    a[4] = "#33#34#35#";
    a[5] = "#18#19#20#21#";
    a[6] = "#22#23#24#25#";
    a[7] = "#26#27#";
    a[8] = "#28#29#";
    a[9] = "#37#38#39#40#";
    if (d.checked == 0) {
        document.all.CheckBox1.checked = 0;
        document.all.CheckBox46.checked = 0;
        document.all.CheckBox46.disabled = 1
    } else {
        var j = 1;
        for (i = 2; i < 42; i++) {
            if (i == 8)
                if (document.all.CheckBox8.checked) {
                    var f = eval("document.all.CheckBox8b");
                    f.checked = 0
                }
            if (i == 9)
                if (document.all.CheckBox9.checked) {
                    var f = eval("document.all.CheckBox9b");
                    f.checked = 0
                }
            var e = eval("document.all.CheckBox" + i);
            if (e != null && e != undefined)
                if (e.checked == 0)
                    j = 0
        }
        if (j == 1) {
            document.all.CheckBox1.checked = 1;
            document.all.CheckBox46.disabled = 0
        }
    }
    var k = d.name.replace("CheckBox", ""), c, g, b;
    for (i = 0; i <= 9; i++)
        if (a[i].indexOf("#" + k + "#") > -1) {
            c = eval("document.all.cba" + i);
            b = i;
            break
        }
    if (c != undefined)
        if (d.checked == 0)
            c.checked = 0;
        else {
            a[b] = a[b].split("#");
            var h = 1;
            for (i = 0; i < a[b].length - 2; i++) {
                g = eval("document.all.CheckBox" + a[b][i + 1]);
                if (g.checked == 0)
                    h = 0
            }
            c.checked = h == 1
        }
    if (document.all.CheckBox45.checked) {
        document.all.CheckBox1.checked = 0;
        document.all.CheckBox46.checked = 0;
        document.all.CheckBox46.disabled = 1;
        document.all.CheckBox48.checked = 1;
        document.all.CheckBox48.disabled = 0
    } else {
        document.all.CheckBox48.checked = 0;
        document.all.CheckBox48.disabled = 1
    }
    if (document.all.CheckBox2.checked)
        document.all.chkidentity.disabled = 0;
    else
        document.all.chkidentity.disabled = 1;
    modista(d)
}
function checksome(e) {
    var a = [];
    a[0] = "3#4#5#6";
    a[1] = "7#8#9#36#41";
    a[2] = "10#11#12#13";
    a[3] = "14#15#16#17";
    a[4] = "33#34#35";
    a[5] = "18#19#20#21";
    a[6] = "22#23#24#25";
    a[7] = "26#27";
    a[8] = "28#29";
    a[9] = "37#38#39#40";
    var c, b;
    for (i = 0; i <= 9; i++) {
        c = eval("document.all.cba" + i);
        if (c == e) {
            a[i] = a[i].split("#");
            for (j = 0; j < a[i].length; j++) {
                b = eval("document.all.CheckBox" + a[i][j]);
                if (b != null && b != undefined)
                    b.checked = c.checked
            }
        }
    }
    var d = 1;
    for (i = 2; i < 42; i++) {
        var b = eval("document.all.CheckBox" + i);
        if (b != null && b != undefined)
            if (b.checked == 0)
                d = 0
    }
    document.all.CheckBox1.checked = d == 1
}
function wordcount(a, b, c) {
    var d = replaceAll(c, "%2", a.value.length);
    (eval("document.all." + b)).innerHTML = d
}
function doEnterKey(a) {
    if (event.which && event.which == 13 || event.keyCode && event.keyCode == 13) {
        var b = eval("document.all." + a);
        document.getElementById(a).focus()
    }
}
function ckbf(d, b, c) {
    var a;
    if (b != "")
        for (i = 1; i <= b.length; i++) {
            a = eval("document.all." + d + (i - 1));
            if (a != undefined)
                if (b.substr(i - 1, 1) == "1")
                    a.checked = 1;
                else
                    a.checked = 0
        }
    if (c != "") {
        document.all.TextBox1.value = c;
        setinfocus("TextBox1")
    }
}
function checkAcce(b) {
    if (!confirm(b)) {
        var a = document.all.UserControl2_HyperLink1;
        a.click();
        return false
    }
}
function isdfile(a) {
    a.checked == 1 && document.all.newsFile1.createTextRange().execCommand("delete")
}
function issfile(a) {
    if (document.all.CheckBox2 != undefined)
        if (checkempty(a.value) == 1)
            document.all.CheckBox2.checked = 0
}
function cprjcheck1(a, b) {
    if (a > 0)
        if (b.checked == 1)
            cprjcheck2(a, false, true, true);
        else
            cprjcheck2(a, false, false, true)
}
function cprjcheck2(e, c, a, d) {
    if (a != undefined) {
        document.all.CheckBox5.disabled = !a;
        document.all.CheckBox6.disabled = !a
    }
    document.all.CheckBox5.checked = c;
    document.all.CheckBox6.checked = d && c;
    var b;
    for (i = 0; i < e; i++) {
        b = eval("document.all.CheckBoxList2_" + i);
        b.checked = c;
        if (a != undefined)
            b.disabled = !a
    }
}
function cprjchecka(a, b) {
    a > 0 && cprjcheck2(a, b.checked, undefined, false)
}
function cprjchecko(c) {
    var a, b;
    if (c > 0) {
        a = 1;
        for (i = 0; i < c; i++) {
            b = eval("document.all.CheckBoxList2_" + i);
            if (b.checked == 0)
                a = 0
        }
        document.all.CheckBox5.checked = a == 1
    }
}
function gosch(d, e, f) {
    var a = eval("document.all." + d)
      , b = eval("document.all." + e)
      , c = eval("document.all." + f);
    if (a != undefined) {
        c.focus();
        a.focus();
        try {
            a.select()
        } catch (g) {}
    } else if (b != undefined) {
        c.focus();
        b.focus();
        try {
            b.select()
        } catch (g) {}
    }
}
function ssubmit(d, c, b) {
    var a = eval("obj." + b);
    if (ValidatorOnSubmit()) {
        a.style.display = "none";
        document.all.psub.innerHTML = c
    }
}
function ssubmit2(c, d, b) {
    var a = eval("obj." + b);
    if (ValidatorOnSubmit())
        a.style.display = "none"
}
function showempv(h, j, k, g, l, m, n, o, p, q, r, s, t) {
    var e = eval("window.opener.document.all." + h), f = eval("window.opener.document.all." + j), a;
    if (checkempty(e.value) == 0 || checkempty(f.value) == 0) {
        alert(r);
        window.close()
    } else {
        var b = new Date
          , u = b.getDay();
        a = f.value;
        var d = q.split(";"), c;
        for (i = 0; i < d.length; i++) {
            c = d[i].split(":");
            a = replaceAll(a, c[0], c[1])
        }
        if (a.indexOf(String.fromCharCode(13)) == -1)
            a = replaceAll(a, String.fromCharCode(10), "<br>");
        else
            a = replaceAll(a, String.fromCharCode(13), "<br>");
        a = replaceAll(a, " ", "&nbsp;");
        a = replaceAll(a, "[EMP13]", o);
        a = replaceAll(a, "[EMP14]", p);
        a = replaceAll(a, "[EMP01]", n);
        a = replaceAll(a, "[EMP02]", '<font style="color:#5A0305;font-weight:bold">' + l + "</font>");
        a = replaceAll(a, "[EMP03]", m);
        a = replaceAll(a, "[EMP15]", g);
        a = replaceAll(a, "[EMP04]", "<font color=red>\u300a" + s + "\u300b</font>");
        a = replaceAll(a, "[EMP05]", k);
        a = replaceAll(a, "[EMP06]", b.getYear() + "/" + (b.getMonth() + 1) + "/" + b.getDate());
        a = replaceAll(a, "[book]", "");
        a = replaceAll(a, "[/book]", "");
        document.all.Label1.innerHTML = '<center><font style="font-size:18pt;font-family:' + t + ';color:#004D99;font-weight:bold">' + e.value + '</font></center><br><br><table width="100%"><tr><td><font style="font-size:11pt;color:darkblue">' + a + "</font></td></tr></table>"
    }
}
function showemgrppv(g, h, j, k, l, m, n, o, p, q, r) {
    var e = eval("window.opener.document.all." + g), f = eval("window.opener.document.all." + h), a;
    if (checkempty(e.value) == 0 || checkempty(f.value) == 0) {
        alert(p);
        window.close()
    } else {
        var b = new Date
          , s = b.getDay();
        a = f.value;
        var d = o.split(";"), c;
        for (i = 0; i < d.length; i++) {
            c = d[i].split(":");
            a = replaceAll(a, c[0], c[1])
        }
        if (a.indexOf(String.fromCharCode(13)) == -1)
            a = replaceAll(a, String.fromCharCode(10), "<br>");
        else
            a = replaceAll(a, String.fromCharCode(13), "<br>");
        a = replaceAll(a, " ", "&nbsp;");
        a = replaceAll(a, "[EMP01]", m);
        a = replaceAll(a, "[EMP07]", n);
        a = replaceAll(a, "[EMP02]", '<font style="color:#5A0305;font-weight:bold">' + k + "</font>");
        a = replaceAll(a, "[EMP03]", l);
        a = replaceAll(a, "[EMP04]", "<font color=red>\u300a" + q + "\u300b</font>");
        a = replaceAll(a, "[EMP05]", j);
        a = replaceAll(a, "[EMP06]", b.getYear() + "/" + (b.getMonth() + 1) + "/" + b.getDate());
        a = replaceAll(a, "[book]", "");
        a = replaceAll(a, "[/book]", "");
        document.all.Label1.innerHTML = '<center><font style="font-size:18pt;font-family:' + r + ';color:#004D99;font-weight:bold">' + e.value + '</font></center><br><br><table width="100%"><tr><td><font style="font-size:11pt;color:darkblue">' + a + "</font></td></tr></table>"
    }
}
function showemprjpv(g, h, j, k, l, m, n, o, p, q, r) {
    var e = eval("window.opener.document.all." + g), f = eval("window.opener.document.all." + h), a;
    if (checkempty(e.value) == 0 || checkempty(f.value) == 0) {
        alert(p);
        window.close()
    } else {
        var b = new Date
          , s = b.getDay();
        a = f.value;
        var d = o.split(";"), c;
        for (i = 0; i < d.length; i++) {
            c = d[i].split(":");
            a = replaceAll(a, c[0], c[1])
        }
        if (a.indexOf(String.fromCharCode(13)) == -1)
            a = replaceAll(a, String.fromCharCode(10), "<br>");
        else
            a = replaceAll(a, String.fromCharCode(13), "<br>");
        a = replaceAll(a, " ", "&nbsp;");
        a = replaceAll(a, "[EMP01]", m);
        a = replaceAll(a, "[EMP07]", n);
        a = replaceAll(a, "[EMP02]", '<font style="color:#5A0305;font-weight:bold">' + k + "</font>");
        a = replaceAll(a, "[EMP03]", l);
        a = replaceAll(a, "[EMP04]", "<font color=red>\u300a" + q + "\u300b</font>");
        a = replaceAll(a, "[EMP05]", j);
        a = replaceAll(a, "[EMP06]", b.getYear() + "/" + (b.getMonth() + 1) + "/" + b.getDate());
        a = replaceAll(a, "[book]", "");
        a = replaceAll(a, "[/book]", "");
        document.all.Label1.innerHTML = '<center><font style="font-size:18pt;font-family:' + r + ';color:#004D99;font-weight:bold">' + e.value + '</font></center><br><br><table width="100%"><tr><td><font style="font-size:11pt;color:darkblue">' + a + "</font></td></tr></table>"
    }
}
function checkedu(b, a) {
    if (checkempty(document.all.DropDownList6.value) == 0)
        a.IsValid = 0;
    else
        a.IsValid = 1
}
function checkclass(b, a) {
    if (checkempty(document.all.TextBox7.value) == 0 && checkempty(document.all.TextBox8.value) == 1 || checkempty(document.all.TextBox7.value) == 1 && checkempty(document.all.TextBox8.value) == 0)
        a.IsValid = 0;
    else
        a.IsValid = 1
}
function checksday(d, b) {
    var c = document.all.TextBox2.value;
    if (checkempty(c) == 1) {
        var a = c.split("/");
        if (a[0] > 2079 || a[0] == 2079 && a[1] > 6 || a[0] == 2079 && a[1] == 6 && a[2] > 6)
            b.IsValid = 0;
        else
            b.IsValid = 1
    } else
        b.IsValid = 1
}
function checkbssrc(d, b) {
    var a = 0
      , c = eval("document.all.Label3");
    for (i = 0; i < c.innerText; i++) {
        cb1 = eval("document.all.CheckBoxbk" + i);
        if (cb1 != undefined)
            if (cb1.checked) {
                a = 1;
                break
            }
    }
    b.IsValid = a
}
function checkidinput(g, e) {
    for (var b = document.all.TextBox3.value, d = [], c = 1, a = 0; a < b.length; a++) {
        d.push(b.substring(a, a + 1));
        var f = d[a];
        if (!f.match(/^[a-zA-Z0-9\-_\.]+$/)) {
            c = 0;
            break
        }
    }
    e.IsValid = c
}
function checkidinput2(b) {
    for (var d = [], c = 1, a = 0; a < b.length; a++) {
        d.push(b.substring(a, a + 1));
        var e = d[a];
        if (!e.match(/^[a-zA-Z0-9\-_\.]+$/)) {
            c = 0;
            break
        }
    }
    return c
}
function checkboxselall(a) {
    var b = document.all.length;
    for (i = 0; i < b; i++)
        if (document.all(i).tagName == "INPUT")
            if (document.all(i).name.indexOf("DataGrid_cball") == -1 && document.all(i).name.indexOf("DataGrid_cb") != -1)
                document.all(i).checked = a.checked
}
function checkboxisall() {
    var f = document.all.length, d = 1, a = 0, c = 0, b, e = 0;
    for (i = 0; i < f; i++)
        if (document.all(i).tagName == "INPUT")
            if (document.all(i).name.indexOf("DataGrid_cball") != -1)
                b = document.all(i).name;
            else if (document.all(i).name.indexOf("DataGrid_cb") != -1) {
                c = a;
                a = document.all(i).checked;
                if (e > 0 && c != a) {
                    d = 0;
                    break
                }
                e++
            }
    document.all[b].checked = d && (a = 1)
}
function fCkid(c, d, b, e, f, g) {
    var a = eval("document.all." + e);
    if (checkempty(a.value))
        if (checkidinput2(a.value)) {
            b.value = d;
            b.disabled = 1;
            frames.__h.location.replace(c + "&id=" + a.value)
        } else {
            alert(g);
            a.focus();
            a.select()
        }
    else {
        alert(f);
        a.focus();
        a.select()
    }
}
function fStip(c, p, q, r, s, t, u, v) {
    var m = document.all[s]
      , f = getCheckedValue(m)
      , n = document.all[t]
      , g = getCheckedValue(n)
      , o = document.all[u]
      , h = getCheckedValue(o)
      , w = document.all[v]
      , j = getCheckedValue(w)
      , k = document.all.chky1.checked
      , e = document.all.chklang1.checked
      , l = document.all.txtmail.value
      , a = eval("document.all.TextBox3")
      , b = "";
    if (a != null && a != undefined)
        b = a.value;
    c.value = q;
    c.disabled = 1;
    var d = r.split("#");
    for (i = 0; i < d.length; i++)
        document.all[d[i]].style.display = "none";
    frames.__h.location.replace(p + "&g1=" + f + "&l1=" + g + "&p1=" + h + "&t1=" + j + "&y1=" + k + "&lang1=" + e + "&smail=" + l + "&uid2=" + b)
}
function getCheckedValue(a) {
    if (!a)
        return "";
    var c = a.length;
    if (c == undefined)
        return a.checked ? a.value : "";
    for (var b = 0; b < c; b++)
        if (a[b].checked)
            return a[b].value;
    return ""
}
function pasteSample1() {
    if (document.all.TextBox2.textContent == undefined)
        document.all.TextBox2.innerText = document.all.mailSample1.innerText;
    else
        document.all.TextBox2.textContent = document.all.mailSample1.textContent
}
function pasteSample2() {
    if (document.all.TextBox1.textContent == undefined) {
        document.all.TextBox1.innerText = document.all.mailTitle1.value;
        document.all.TextBox2.innerText = document.all.mailSample1.innerText
    } else {
        document.all.TextBox1.textContent = document.all.mailTitle1.value;
        document.all.TextBox2.textContent = document.all.mailSample1.textContent
    }
}
function fStsnm(j, d, e, f, g, h) {
    var a = eval("document.all." + e)
      , b = eval("document.all." + f);
    if (!checkempty(a.value)) {
        alert(g);
        a.focus();
        a.select()
    } else if (!checkempty(b.value)) {
        alert(h);
        b.focus();
        b.select()
    } else {
        var c = d.split("#");
        for (i = 0; i < c.length; i++)
            document.all[c[i]].style.display = "none";
        document.all.mailimage.style.display = "block";
        document.fmSendMail1.ss1.value = a.value;
        document.fmSendMail1.ss2.value = b.value;
        document.fmSendMail1.submit()
    }
}
function fStupf(a) {
    var b = eval("document.all." + a);
    document.fmUploadFile1.submit()
}
function checkinput1(c, b) {
    var a = document.all.DropDownList13.value != "" || document.all.DropDownList15.value != "" || document.all.DropDownList17.value != "" || document.all.DropDownList19.value != "" || document.all.DropDownList21.value != "" || document.all.DropDownList23.value != "" || document.all.DropDownList25.value != "" || document.all.DropDownList27.value != "" || document.all.DropDownList31.value != "" || document.all.DropDownList28.value != "" || document.all.DropDownList36.value != "" || document.all.DropDownList38.value != "" || document.all.DropDownList41.value != "" || document.all.DropDownList43.value != "" || checkempty(document.all.TextBox7.value) == 1 || checkempty(document.all.TextBox8.value) == 1;
    if (getCheckedValue(document.all.ss1) == "RadioButton1")
        a = a || checkempty(document.all.TextBox4.value) == 1;
    else
        a = a || document.all.TextBox3 != undefined && checkempty(document.all.TextBox3.value) == 1 || document.all.TextBox5 != undefined && checkempty(document.all.TextBox5.value) == 1 || document.all.TextBox6 != undefined && checkempty(document.all.TextBox6.value) == 1 || document.all.DropDownList3 != undefined && document.all.DropDownList3.value != "" || document.all.DropDownList7 != undefined && document.all.DropDownList7.value != "" || document.all.DropDownList11 != undefined && document.all.DropDownList11.value != "";
    b.IsValid = a
}
function selallprj(a) {
    var b = document.all.length;
    for (i = 0; i < b; i++)
        if (document.all(i).tagName == "INPUT")
            if (document.all(i).name.indexOf("CheckBoxList1") == 0)
                document.all(i).checked = a.checked
}
function checkinput2(c, b) {
    var a = document.all.DropDownList13.value != "" || document.all.DropDownList15.value != "" || document.all.DropDownList17.value != "" || checkempty(document.all.TextBox7.value) == 1 || checkempty(document.all.TextBox8.value) == 1;
    if (getCheckedValue(document.all.ss1) == "RadioButton1")
        a = a || checkempty(document.all.TextBox4.value) == 1;
    else
        a = a || document.all.TextBox3 != undefined && checkempty(document.all.TextBox3.value) == 1 || document.all.TextBox5 != undefined && checkempty(document.all.TextBox5.value) == 1 || document.all.TextBox6 != undefined && checkempty(document.all.TextBox6.value) == 1 || document.all.DropDownList3 != undefined && document.all.DropDownList3.value != "" || document.all.DropDownList7 != undefined && document.all.DropDownList7.value != "" || document.all.DropDownList11 != undefined && document.all.DropDownList11.value != "";
    b.IsValid = a
}
function checkinput3(c, b) {
    var a = 0;
    for (i = 0; i <= 3; i++) {
        cb1 = eval("document.all.cbSb" + (i + 1));
        if (cb1 != undefined)
            if (cb1.checked) {
                a = 1;
                break
            }
    }
    b.IsValid = a
}
function fStip2(a, l, m, n, o, p, q, r) {
    var h = document.all[o]
      , c = getCheckedValue(h)
      , j = document.all[p]
      , d = getCheckedValue(j)
      , k = document.all[q]
      , e = getCheckedValue(k)
      , s = document.all[r]
      , f = getCheckedValue(s)
      , g = document.all.txtmail.value;
    a.value = m;
    a.disabled = 1;
    var b = n.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(l + "&g1=" + c + "&l1=" + d + "&p1=" + e + "&t1=" + f + "&smail=" + g)
}
function fStip3(a, k, l, m, n, o, p, q) {
    var g = document.all[n]
      , c = getCheckedValue(g)
      , h = document.all[o]
      , d = getCheckedValue(h)
      , j = document.all[p]
      , e = getCheckedValue(j)
      , r = document.all[q]
      , f = getCheckedValue(r);
    a.value = l;
    a.disabled = 1;
    var b = m.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(k + "&g1=" + c + "&l1=" + d + "&p1=" + e + "&t1=" + f)
}
function fStip4(a, e, f, g, h) {
    var d = document.all[h]
      , c = getCheckedValue(d);
    a.value = f;
    a.disabled = 1;
    var b = g.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(e + "&g1=" + c)
}
function checkinput4(d, b) {
    var a = 0
      , c = document.all.length;
    for (i = 0; i < c; i++)
        if (document.all(i).tagName == "INPUT")
            if (document.all(i).name.indexOf("CheckBoxList1") == 0)
                if (document.all(i).checked) {
                    a = 1;
                    break
                }
    b.IsValid = a
}
function checkdenyinput(c, a) {
    var b = checkempty(document.all.TextBox3.value) == 1 || checkempty(document.all.TextBox4.value) == 1 || checkempty(document.all.TextBox5.value) == 1 || checkempty(document.all.TextBox6.value) == 1 || checkempty(document.all.TextBox7.value) == 1 || document.all.CheckBox2.checked == 1 || document.all.DropDownList15.value == "";
    a.IsValid = b
}
function checkdupinput(c, a) {
    var b = checkempty(document.all.TextBox11.value) == 1 || checkempty(document.all.TextBox12.value) == 1 || checkempty(document.all.TextBox3.value) == 1 || checkempty(document.all.TextBox4.value) == 1 || checkempty(document.all.TextBox5.value) == 1 || checkempty(document.all.TextBox6.value) == 1 || checkempty(document.all.TextBox7.value) == 1 || checkempty(document.all.TextBox8.value) == 1;
    a.IsValid = b
}
function fendanSet(a) {
    if (a.checked == 1) {
        document.all.CheckBox3.disabled = 1;
        document.all.CheckBox10.disabled = 1;
        document.all.CheckBox11.disabled = 1;
        document.all.CheckBox12.disabled = 1;
        document.all.CheckBox13.disabled = 1;
        document.all.CheckBox14.disabled = 1;
        document.all.CheckBox15.disabled = 1;
        document.all.cbSb1.checked = 1;
        document.all.cbSb1.disabled = 1;
        document.all.cbSb2.disabled = 1;
        document.all.cbSb3.disabled = 1;
        document.all.cbSb4.disabled = 1;
        document.all.CheckBox7.checked = 0;
        document.all.CheckBox7.disabled = 1;
        prjlibset();
        document.all.CheckBox22.disabled = 1
    } else {
        document.all.CheckBox3.disabled = 0;
        document.all.CheckBox10.disabled = 0;
        document.all.CheckBox11.disabled = 0;
        document.all.CheckBox12.disabled = 0;
        document.all.CheckBox13.disabled = 0;
        document.all.CheckBox14.disabled = 0;
        document.all.CheckBox15.disabled = 0;
        document.all.CheckBox7.disabled = 0;
        prjlibset();
        document.all.CheckBox22.disabled = 0;
        document.all.cbSb1.checked = 1;
        document.all.cbSb1.disabled = 0;
        document.all.cbSb2.disabled = 0;
        document.all.cbSb3.disabled = 0;
        document.all.cbSb4.disabled = 0
    }
}
function checkemlloginput(i, a) {
    var b = document.all.DropDownList6.selectedIndex
      , f = document.all.DropDownList6.options(b).text
      , c = document.all.DropDownList15.selectedIndex
      , g = document.all.DropDownList15.options(c).text
      , d = document.all.DropDownList9.selectedIndex
      , h = document.all.DropDownList9.options(d).text
      , e = checkempty(document.all.TextBox3.value) == 1 || checkempty(document.all.TextBox4.value) == 1 || checkempty(document.all.TextBox5.value) == 1 || checkempty(document.all.TextBox6.value) == 1 || checkempty(document.all.TextBox7.value) == 1 || checkempty(document.all.TextBox8.value) == 1 || checkempty(document.all.TextBox9.value) == 1 || checkempty(f) == 1 || checkempty(g) == 1 || checkempty(h) == 1;
    a.IsValid = e
}
function ddlchange() {
    var c = document.all.ddlGrp1_1.selectedIndex
      , d = document.all.ddlGrp1_2.selectedIndex
      , e = document.all.ddlGrp1_3.selectedIndex
      , b = 0
      , a = eval("document.all.ddlGrp1_5");
    if (a != null && a != undefined)
        b = a.selectedIndex;
    if (c != 0 || d != 0 || e != 0 || b != 0 || document.all.ddlGrp1_4.value != "-1") {
        document.all.CheckBox20.checked = 0;
        document.all.CheckBox20.disabled = 1;
        document.all.CheckBox8.disabled = 0
    } else {
        document.all.CheckBox20.disabled = 0;
        document.all.CheckBox8.disabled = 1;
        document.all.CheckBox8.checked = 0
    }
}
function fsyear(a, b) {
    a.value = "";
    a.disabled = 1;
    frames.__h.location.replace(b)
}
function netchoiceset(a) {
    if (a.checked == 1) {
        document.all.DropDownList2.disabled = 0;
        document.all.DropDownList2.selectindex = 1
    } else
        document.all.DropDownList2.disabled = 1
}
function yanzhengset() {
    if (document.all.DropDownList19.selectindex == 0) {
        document.all.DropDownList20.disabled = 0;
        document.all.DropDownList33.disabled = 0
    } else if (document.all.DropDownList19.selectindex == 1) {
        document.all.DropDownList20.disabled = 1;
        document.all.DropDownList33.disabled = 1
    }
}
function ddladd(j, f, g) {
    for (var h = j.value.trim(), d = document.getElementById(f), e = d.options.length; e >= 0; e--)
        d.remove(e);
    for (var b = document.getElementById(g), a = 0; a < b.options.length; a++) {
        var i = b.options[a].value.indexOf(h);
        if (i > -1) {
            var c = document.createElement("option");
            c.text = b.options[a].value;
            c.value = b.options[a].value;
            d.options.add(c)
        }
    }
}
function changeget() {
    var c = document.all("RadioButtonList1")
      , i = c[1].value
      , h = c[2].value
      , j = c[3].value
      , e = i.split(";")
      , g = document.all.length
      , d = document.getElementById("CheckBoxList1").getElementsByTagName("input")
      , f = d.length;
    for (a = 0; a < g; a++)
        if (document.all(a).tagName == "INPUT")
            if (document.all(a).name.indexOf("CheckBoxList1") == 0)
                document.all(a).checked = 0;
    if (c)
        for (var b = 0; b < c.length; b++)
            if (c[b].checked) {
                document.getElementById("txtMprjid").value = b - 1;
                if (b == 1) {
                    for (a = 0; a < g; a++)
                        if (document.all(a).tagName == "INPUT")
                            if (document.all(a).name.indexOf("CheckBoxList1") == 0)
                                document.all(a).checked = 1
                } else if (b == 2) {
                    for (var a = 0; a < f; a++)
                        if (d[a].type == "checkbox")
                            if (h.indexOf(e[a]) != -1)
                                d[a].checked = 1
                } else if (b == 3)
                    for (var a = 0; a < f; a++)
                        if (d[a].type == "checkbox")
                            if (j.indexOf(e[a]) != -1)
                                d[a].checked = 1;
                break
            }
}
function ListBox1change() {
    var a = document.createElement("option"), b;
    if (document.Form1.ListBox1.length == 0)
        return false;
    b = document.Form1.ListBox1.selectedIndex;
    if (b < 0)
        return false;
    a.text = document.Form1.ListBox1.options(b).text;
    a.value = document.Form1.ListBox1.value;
    document.Form1.TextBox3.value = a.value;
    document.Form1.TextBox4.value = a.value
}
function ButtonChoice(d) {
    var c = d.name, a = document.createElement("option"), b;
    if (document.Form1.ListBox1.length == 0)
        return false;
    b = document.Form1.ListBox1.selectedIndex;
    if (b < 0)
        return false;
    a.text = document.Form1.ListBox1.options(b).text;
    a.value = document.Form1.ListBox1.value;
    if (c == "Button2")
        document.Form1.TextBox3.value = a.value;
    else if (c == "Button3")
        document.Form1.TextBox4.value = a.value
}
function checktypeall(a) {
    if (confirm(a))
        document.all.TextBox3.value = 0;
    else
        document.all.TextBox3.value = 1
}
function checkCount(k, e, n, o) {
    var a = document.getElementById(k)
      , g = a.getElementsByTagName("label")
      , m = document.getElementById("txtmdbj").value
      , d = 0
      , b = 0
      , c = 0;
    for (i = 0; i < a.all.tags("input").length; i++) {
        if (a.all.tags("input")[i].type == "checkbox")
            if (a.all.tags("input")[i].checked)
                b++;
        if (b > e) {
            c = 1;
            break
        } else {
            var j = g[i].innerText
              , f = a.all.tags("input")[i].checked;
            if (f)
                if (m.indexOf(j) > -1)
                    d = 1
        }
    }
    if (b == 0 && e != 1)
        c = 1;
    if (c)
        if (b == 0) {
            alert(o);
            event.srcElement.checked = 1
        } else {
            alert(n);
            event.srcElement.checked = 0
        }
    else if (d == 1) {
        document.getElementById("Label37").style.display = "block";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "block";
        document.getElementById("ddlsubject").style.display = "block";
        var h = document.getElementById("ddlsubject").selectedIndex
          , l = document.getElementById("ddlsubject").options(h).value;
        if (l != "") {
            document.getElementById("Button1").disabled = 0;
            if (document.getElementById("Button2") != undefined)
                document.getElementById("Button2").disabled = 0
        } else {
            document.getElementById("Button1").disabled = 1;
            if (document.getElementById("Button2") != undefined)
                document.getElementById("Button2").disabled = 1
        }
    } else {
        document.getElementById("Label37").style.display = "none";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "none";
        document.getElementById("ddlsubject").selectedIndex = 0;
        document.getElementById("ddlsubject").style.display = "none";
        document.getElementById("Button1").disabled = 0;
        if (document.getElementById("Button2") != undefined)
            document.getElementById("Button2").disabled = 0
    }
}
function regSet(a) {
    if (a.checked == 1) {
        document.all.CheckBox23.disabled = 0;
        document.getElementById("DropDownList8").disabled = 0
    } else {
        document.all.CheckBox23.checked = 0;
        document.all.CheckBox23.disabled = 1;
        document.getElementById("DropDownList8").disabled = 1
    }
}
function ddlregchange(a, b) {
    if (document.all.DropDownList13.value == a || document.all.DropDownList13.value == b) {
        document.all.Label16.disabled = 0;
        document.all.DropDownList16.disabled = 0;
        document.all.DropDownList17.disabled = 0
    } else {
        document.all.Label16.disabled = 1;
        document.all.DropDownList16.disabled = 1;
        document.all.DropDownList17.disabled = 1
    }
}
function manyuserchange() {
    if (document.all.CheckBox1.checked)
        document.all.DropDownList5.disabled = 0;
    else
        document.all.DropDownList5.disabled = 1;
    if (document.all.CheckBox2.checked) {
        document.all.TextBox14.disabled = 0;
        document.all.DropDownList6.disabled = 0;
        document.all.Label16.disabled = 0
    } else {
        document.all.TextBox14.disabled = 1;
        document.all.DropDownList6.disabled = 1;
        document.all.Label16.disabled = 1
    }
    if (document.all.CheckBox3.checked) {
        document.all.TextBox13.disabled = 0;
        document.all.Label36.disabled = 0
    } else {
        document.all.TextBox13.disabled = 1;
        document.all.Label36.disabled = 1
    }
    if (document.all.CheckBox4.checked) {
        document.all.TextBox11.disabled = 0;
        document.all.Label26.disabled = 0
    } else {
        document.all.TextBox11.disabled = 1;
        document.all.Label26.disabled = 1
    }
}
function ddlchoice(c, d) {
    var a;
    a = document.all.DropDownList1.selectedIndex;
    var b = document.all.DropDownList1.options(a).text;
    if (b == "")
        document.all.Label1.text = d;
    else
        document.all.Label1.innerText = replaceAll(c, "%1", b)
}
function attachSet(a) {
    if (a.checked == 1)
        document.all.CheckBox24.disabled = 0;
    else
        document.all.CheckBox24.disabled = 1
}
function checkSetform() {
    document.getElementById("CheckBox24").disabled = !document.getElementById("CheckBox5").checked;
    document.getElementById("CheckBox23").disabled = !document.getElementById("CheckBox20").checked;
    superstarset();
    chktuijian();
    chkwav()
}
function fStip5(a, e, f, g, h) {
    var d = document.all[h]
      , c = getCheckedValue(d);
    a.value = f;
    a.disabled = 1;
    var b = g.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(e + "&g1=" + c)
}
function chkJudgePhrase(e) {
    for (var d = 0, a = 0, g = document.all("CheckBoxList" + e), c = ";", d = 0; d < g.rows.length; d++)
        for (a = 0; a < 8; a++) {
            var b = "CheckBoxList" + e + "_" + parseInt(d * 8 + a);
            if (document.getElementById(b) != undefined) {
                var f = document.all[b].checked;
                if (f)
                    c = c + document.all[b].parentElement.innerText + ";"
            }
        }
    return c
}
function JudgePhrase(c, l, h) {
    for (var e = 0, a = 0, o = 0, d = "", f = 0, m = [1, 2, 3, 5, 6, 7], n = "", g = "", k = document.all("CheckBoxList" + c), e = 0; e < k.rows.length; e++)
        for (a = 0; a < 8; a++) {
            var b = "CheckBoxList" + c + "_" + parseInt(e * 8 + a);
            if (document.getElementById(b) != undefined) {
                var j = document.getElementById(b).checked;
                if (j) {
                    d = ";" + document.getElementById(b).parentElement.innerText + ";";
                    for (var i in h)
                        if (m[i] != c)
                            if (h[i].indexOf(d) != "-1")
                                if (d == ";" + document.getElementById(event.srcElement.id).parentElement.innerText + ";") {
                                    g = document.getElementById(event.srcElement.id).parentElement.innerText;
                                    f = 1;
                                    break
                                }
                }
            }
        }
    if (f) {
        alert(g + l);
        event.srcElement.checked = 0
    }
}
function checkJudgeOne(h, g) {
    var m = 0
      , n = 0
      , j = 0
      , a = "";
    a = chkJudgePhrase(1);
    var b = "";
    b = chkJudgePhrase(2);
    var c = "";
    c = chkJudgePhrase(3);
    var d = "";
    d = chkJudgePhrase(5);
    var e = "";
    e = chkJudgePhrase(6);
    var f = "";
    f = chkJudgePhrase(7);
    var k = ""
      , i = [a, b, c, d, e, f]
      , l = [1, 2, 3, 5, 6, 7];
    _c = JudgePhrase(h, g, i)
}
function SetCheckBoxState() {
    var a = document.all
      , b = event.srcElement;
    if (b.tagName == "INPUT" && b.type.toLowerCase() == "checkbox")
        for (i = 0; i < a.length; i++)
            if (a[i].tagName == "INPUT" && a[i].type.toLowerCase() == "checkbox")
                a[i].checked = 0;
    b.checked = !b.checked
}
function ddlGrp(a) {
    var b = a.selectedIndex
      , c = a.options(b).value;
    document.getElementById("HyperLink2").href = "typephrase.aspx?ff=85&grp=" + c
}
function checklanginput(d, c) {
    var b = -1
      , a = 1;
    if (document.all.TextBox3.value != "" && document.all.TextBox4.value == "" || document.all.TextBox3.value == "" && document.all.TextBox4.value != "") {
        b = 0;
        a = 0
    } else if (document.all.TextBox5.value != "" && document.all.TextBox6.value == "" || document.all.TextBox5.value == "" && document.all.TextBox6.value != "") {
        b = 1;
        a = 0
    } else if (document.all.TextBox7.value != "" && document.all.TextBox8.value == "" || document.all.TextBox7.value == "" && document.all.TextBox8.value != "") {
        b = 2;
        a = 0
    } else if (document.all.TextBox9.value != "" && document.all.TextBox10.value == "" || document.all.TextBox9.value == "" && document.all.TextBox10.value != "") {
        b = 3;
        a = 0
    } else if (document.all.TextBox11.value != "" && document.all.TextBox12.value == "" || document.all.TextBox11.value == "" && document.all.TextBox12.value != "") {
        b = 4;
        a = 0
    } else if (document.all.TextBox13.value != "" && document.all.TextBox14.value == "" || document.all.TextBox13.value == "" && document.all.TextBox14.value != "") {
        b = 5;
        a = 0
    } else if (document.all.TextBox25.value != "" && document.all.TextBox26.value == "" || document.all.TextBox25.value == "" && document.all.TextBox26.value != "") {
        b = 7;
        a = 0
    } else if (document.all.TextBox27.value != "" && document.all.TextBox28.value == "" || document.all.TextBox27.value == "" && document.all.TextBox28.value != "") {
        b = 8;
        a = 0
    } else if (document.all.TextBox29.value != "" && document.all.TextBox30.value == "" || document.all.TextBox29.value == "" && document.all.TextBox30.value != "") {
        b = 9;
        a = 0
    }
    c.IsValid = a
}
function ddlStachange() {
    var c;
    c = document.getElementById("DropDownList15").selectedIndex;
    var a = document.getElementById("DropDownList15").options(c).text
      , e = document.getElementById("DropDownList15").value
      , b = document.getElementById("TextBox10").value
      , d = document.getElementById("TextBox11").value;
    if (a == null || a == "") {
        document.all.TextBox10.value = "";
        document.all.TextBox11.value = ""
    } else if (b.indexOf(a) == -1) {
        document.all.TextBox10.value = b + a + ",";
        document.all.TextBox11.value = d + e + ","
    }
}
function checkchoicebook(c, a) {
    var b = checkempty(document.all.TextBox3.value) == 1 || checkempty(document.all.TextBox4.value) == 1 || checkempty(document.all.TextBox5.value) == 1 || checkempty(document.all.TextBox6.value) == 1;
    a.IsValid = b
}
function checkcurrency(f) {
    var b = document.getElementById("txtprice").value
      , e = document.getElementById("chky1");
    if (e.checked) {
        document.getElementById("txtexc") != null && document.getElementById("txtexc") != undefined && excelMoneySum(-1);
        for (var d = 30, c = 0; c < d; c++) {
            var a = eval("document.all.rbprice_" + c);
            if (a != null && a != undefined)
                a.checked = 0
        }
        if (checkempty(document.all.txtCurrencybj.value) == 0) {
            alert(f);
            if (b != "") {
                var a = eval("document.all.rbprice_" + b);
                a.checked = 1;
                if (document.getElementById("stipcy1") != null && document.getElementById("stipcy1") != undefined) {
                    document.getElementById("stipcy1").value = "";
                    stip1set()
                } else
                    document.all.stip1.disabled = 0
            } else if (document.getElementById("stipcy1") != null && document.getElementById("stipcy1") != undefined) {
                document.getElementById("stipcy1").value = "1";
                stip1set()
            } else
                document.all.stip1.disabled = 1;
            event.srcElement.checked = 0
        } else if (document.getElementById("stipcy1") != null && document.getElementById("stipcy1") != undefined) {
            document.getElementById("stipcy1").value = "";
            stip1set()
        } else
            document.all.stip1.disabled = 0
    } else {
        if (b != "") {
            var a = eval("document.all.rbprice_" + b);
            a.checked = 1;
            document.getElementById("txtexc") != null && document.getElementById("txtexc") != undefined && excelMoneySum(b)
        }
        if (document.getElementById("stipcy1") != null && document.getElementById("stipcy1") != undefined) {
            document.getElementById("stipcy1").value = "";
            stip1set()
        } else
            document.all.stip1.disabled = 0
    }
}
function checkDeptOne(s, p, i) {
    for (var a = 0, v = 0, l = 0, u = "", h = "", t = $F("txtboth"), c = "", j = 0, k = "", r = "", e = "", d = "", m = "", g = $F("txtbothall"), q = $("RadioButtonList1"), f = q.getElementsByTagName("input"), o = f.length, a = 0; a < o; a++)
        if (f[a].type == "radio")
            if (f[a].checked) {
                d = f[a].nextSibling.innerText;
                d = d.substring(0, d.indexOf("("))
            }
    var w = $("chk1");
    for (a = 0; a < p; a++) {
        var b = "chk1_" + a;
        if ($(b)) {
            var n = $(b).checked;
            k = $(b).parentElement.innerText + ";";
            h = ":" + $(b).parentElement.innerText + "]";
            r = $(b).parentElement.innerText;
            m = "[" + d + h;
            if (n) {
                e = e + k;
                if (g.indexOf(h) != -1 && g.indexOf(m) == -1) {
                    c = g.substr(0, g.indexOf(h));
                    j = c.lastIndexOf("[");
                    c = c.substr(j + 1, c.length - j);
                    k = $(b).parentElement.innerText + ": ";
                    l = 1;
                    break
                }
            } else
                e = e.replace(/';'+$(name1).parentElement.innerText+';'/i, ";")
        }
    }
    if (l) {
        i = i.replace(/%1/i, c);
        alert(i);
        event.srcElement.checked = 0
    } else
        $("txt1").innerText = e
}
function ddldeptchange() {
    for (var a = 0, a = 1; a < 20; a++) {
        var d = "document.all.ddlGrp" + a + "_2"
          , b = eval(d);
        if (b != null && b != undefined) {
            var e = "document.all.ddlGrp" + a + "_4"
              , c = eval(e);
            if (b.selectedIndex != 0 && c.value != "-1")
                c.selectedIndex = 0
        }
    }
}
function ddldeptchange2() {
    for (var a = 0, a = 1; a < 20; a++) {
        var d = "document.all.ddlGrp" + a + "_4"
          , b = eval(d);
        if (b != null && b != undefined)
            if (b.value != "-1") {
                var e = "document.all.ddlGrp" + a + "_2"
                  , c = eval(e);
                c.selectedIndex = 0
            }
    }
}
function getOtherDept() {
    for (var j = "", e = "", f = "", h = document.getElementById("txtcnt").value, c = document.getElementById("txtbothall").value, d = document.getElementsByName("RadioButtonList1"), b = 0; b < d.length; b++)
        if (d[b].checked) {
            document.all.Button1.disabled = 0;
            for (var i = d[b].value, k = document.getElementById("chk1"), g = 0; g < h; g++) {
                var a = "chk1_" + g;
                if (document.all[a] != null && document.all[a] != undefined) {
                    f = ":" + document.all[a].parentElement.innerText + "]";
                    e = "[" + i + f;
                    if (c.indexOf(e) != -1) {
                        document.all[a].checked = 1;
                        document.all[a].parentElement.style.color = "black"
                    } else {
                        document.all[a].checked = 0;
                        if (c.indexOf(f) != -1 && c.indexOf(e) == -1)
                            document.all[a].parentElement.style.color = "silver"
                    }
                }
            }
        }
}
function checkrbprice() {
    for (var f = document.getElementById("txtprice").value, e = document.getElementById("chky1"), c = -1, d = 30, a = 0; a < d; a++) {
        var b = eval("document.all.rbprice_" + a);
        if (b != null && b != undefined)
            if (b.checked) {
                c = a;
                e.checked = 0;
                break
            }
    }
    document.getElementById("txtexc") != null && document.getElementById("txtexc") != undefined && excelMoneySum(c)
}
function checkrblang() {
    for (var e = document.getElementById("chklang1"), c = 30, d = -1, a = 0; a < c; a++) {
        var b = eval("document.all.rblanguage_" + a);
        if (b != null && b != undefined)
            if (b.checked) {
                d = a;
                e.checked = 0;
                break
            }
    }
    if (document.getElementById("txtexc") != null && document.getElementById("txtexc") != undefined) {
        ChangelangType();
        checkdatatype()
    }
}
function checklang(f) {
    var b = document.getElementById("txtlangdf").value
      , e = document.getElementById("chklang1");
    if (e.checked) {
        for (var d = 30, c = 0; c < d; c++) {
            var a = eval("document.all.rblanguage_" + c);
            if (a != null && a != undefined)
                a.checked = 0
        }
        if (checkempty(document.all.txtlangbj.value) == 0) {
            alert(f);
            if (b != "") {
                var a = eval("document.all.rblanguage_" + b);
                a.checked = 1;
                if (document.getElementById("stiplg1") != null && document.getElementById("stiplg1") != undefined) {
                    document.getElementById("stiplg1").value = "";
                    stip1set()
                } else
                    document.all.stip1.disabled = 0
            } else if (document.getElementById("stiplg1") != null && document.getElementById("stiplg1") != undefined) {
                document.getElementById("stiplg1").value = "1";
                stip1set()
            } else
                document.all.stip1.disabled = 1;
            event.srcElement.checked = 0
        } else if (document.getElementById("stiplg1") != null && document.getElementById("stiplg1") != undefined) {
            document.getElementById("stiplg1").value = "";
            stip1set()
        } else
            document.all.stip1.disabled = 0
    } else {
        if (b != "") {
            var a = eval("document.all.rblanguage_" + b);
            a.checked = 1
        }
        if (document.getElementById("stiplg1") != null && document.getElementById("stiplg1") != undefined) {
            document.getElementById("stiplg1").value = "";
            stip1set()
        } else
            document.all.stip1.disabled = 0
    }
}
function allowmailinput() {
    if (document.all.chkmail.checked) {
        document.all.txtmail.disabled = 0;
        document.all.txtmail.focus()
    } else
        document.all.txtmail.disabled = 1
}
function getmailinput() {
    if (document.all.chkmail.checked) {
        var a = document.all.txtmail.value;
        document.all.txtmail2.value = a
    }
}
function checkdupcy(m) {
    document.all.txtbj.value = "1";
    var a = document.getElementsByTagName("input")
      , h = a.length;
    for (i = 0; i < h; i++)
        if (a[i].type == "text") {
            s1 = a[i].value;
            if (s1.trim != "") {
                var f = s1.split(";")
                  , n = f.length;
                for (j = 0; j < n; j++) {
                    var g = f[j].toLowerCase();
                    if (g.length != 0)
                        for (k = i + 1; k < h; k++)
                            if (a[k].type == "text") {
                                s3 = a[k].value.toLowerCase();
                                var l = s3.indexOf(g);
                                if (l > -1) {
                                    var d = eval("document.all.lb_" + (k - 1))
                                      , e = eval("document.all.lb_" + (i - 1));
                                    if (d != null && d != undefined && e != null && e != undefined) {
                                        var b = d.innerHTML;
                                        b = b.substring(0, b.indexOf("\uff1a"));
                                        var c = e.innerHTML;
                                        c = c.substring(0, c.indexOf("\uff1a"));
                                        alert(b + "\u3001" + c + m);
                                        document.all.txtbj.value = "0";
                                        break
                                    }
                                }
                            }
                }
            }
        }
}
function checkduplang(m) {
    document.all.txtbj.value = "1";
    var a = document.getElementsByTagName("input")
      , h = a.length;
    for (i = 0; i < h; i++)
        if (a[i].type == "text") {
            s1 = a[i].value;
            if (s1.trim != "") {
                var f = s1.split(";")
                  , n = f.length;
                for (j = 0; j < n; j++) {
                    var g = f[j].toLowerCase();
                    if (g.length != 0)
                        for (k = i + 1; k < h; k++)
                            if (a[k].type == "text") {
                                s3 = a[k].value.toLowerCase();
                                var l = s3.indexOf(g);
                                if (l > -1) {
                                    var d = eval("document.all.lb_" + (k - 1))
                                      , e = eval("document.all.lb_" + (i - 1));
                                    if (d != null && d != undefined && e != null && e != undefined) {
                                        var b = d.innerHTML;
                                        b = b.substring(0, b.indexOf("\uff1a"));
                                        var c = e.innerHTML;
                                        c = c.substring(0, c.indexOf("\uff1a"));
                                        alert(b + "\u3001" + c + m);
                                        document.all.txtbj.value = "0";
                                        break
                                    }
                                }
                            }
                }
            }
        }
}
function emailvali(a, g, f) {
    var i = a.name
      , d = a.value.trim();
    if (d == "") {
        if (i.indexOf("bkmail") == -1) {
            alert(f);
            a.focus();
            return false
        }
    } else {
        var c = d.split(";")
          , k = c.length
          , e = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        for (j = 0; j < k; j++) {
            var b = c[j].toLowerCase();
            if (b.length != 0) {
                var h = e.test(b);
                if (!h) {
                    alert(g);
                    a.focus();
                    return false
                }
            }
        }
    }
}
function newbookchoice(a) {
    if (a.checked == 0) {
        document.all.CheckBox29.checked = 0;
        document.all.CheckBox30.checked = 0;
        document.all.CheckBox29.disabled = 1;
        document.all.CheckBox30.disabled = 1
    } else {
        document.all.CheckBox29.disabled = 0;
        document.all.CheckBox30.disabled = 0
    }
}
function ddlSetlibUser(d) {
    var f = d.selectedIndex
      , g = d.id
      , a = d.options(f).value
      , b = d.options(f).text
      , c = ""
      , e = "";
    if (a == null || a == "" || a == "1") {
        if (g == "DropDownList1") {
            document.all.lbl1.innerText = "";
            document.all.lbl1.title = "";
            document.all.txtid.value = "";
            document.all.txtname.value = ""
        }
    } else if (g == "DropDownList1") {
        c = document.all.lbl1.innerText;
        e = document.all.lbl1.title;
        if (c.indexOf(b) == -1)
            if (c == "") {
                document.all.lbl1.innerText = b;
                document.all.lbl1.title = a;
                document.all.txtid.value = a;
                document.all.txtname.value = b
            } else {
                document.all.lbl1.innerText = c + ";" + b;
                document.all.lbl1.title = e + ";" + a;
                document.all.txtid.value = e + ";" + a;
                document.all.txtname.value = c + ";" + b
            }
    }
}
function ddlSheetChoice() {
    var a = document.all.ddl1.value;
    document.all.txtsheet.value = a
}
function libusercheck(a) {
    if (a.checked == 0) {
        document.all.CheckBox47.checked = 0;
        document.all.CheckBox47.disabled = 1;
        document.all.btncolor.disabled = 1;
        document.all.DropDownList11.options[0].selected = 1;
        document.all.DropDownList11.disabled = 1;
        document.all.TextBox17.value = "";
        document.all.DropDownList13.value = "";
        document.all.DropDownList13.disabled = 1;
        document.all.TextBox19.value = "";
        document.all.TextBox20.value = "";
        document.all.TextBox19.disabled = 1;
        document.all.TextBox20.disabled = 1;
        document.all.Label46.style.display = "none";
        chkdptset(true);
        document.all.chkl1.checked = 0;
        document.all.chkl2.checked = 0;
        document.all.chkl3.checked = 0;
        document.all.chkl4.checked = 0;
        document.all.chkl1.disabled = 1;
        document.all.chkl2.disabled = 1;
        document.all.chkl3.disabled = 1;
        document.all.chkl4.disabled = 1;
        document.all.cblang.checked = 0;
        document.all.cblang0.checked = 0;
        document.all.cblang1.checked = 0;
        document.all.cblang2.checked = 0;
        document.all.cblang3.checked = 0;
        document.all.cblang4.checked = 0;
        document.all.cblang5.checked = 0;
        document.all.cblang6.checked = 0;
        document.all.cblang7.checked = 0;
        document.all.cblang8.checked = 0;
        document.all.cblang9.checked = 0;
        document.all.cblang.disabled = 1;
        document.all.cblang0.disabled = 1;
        document.all.cblang1.disabled = 1;
        document.all.cblang2.disabled = 1;
        document.all.cblang3.disabled = 1;
        document.all.cblang4.disabled = 1;
        document.all.cblang5.disabled = 1;
        document.all.cblang6.disabled = 1;
        document.all.cblang7.disabled = 1;
        document.all.cblang8.disabled = 1;
        document.all.cblang9.disabled = 1;
        document.all.cbSb0.checked = 0;
        document.all.cbSb1.checked = 0;
        document.all.cbSb2.checked = 0;
        document.all.cbSb3.checked = 0;
        document.all.cbSb4.checked = 0;
        document.all.cbSb5.checked = 0;
        document.all.cbSb0.disabled = 1;
        document.all.cbSb1.disabled = 1;
        document.all.cbSb2.disabled = 1;
        document.all.cbSb3.disabled = 1;
        document.all.cbSb4.disabled = 1;
        document.all.cbSb5.disabled = 1
    } else {
        document.all.CheckBox47.disabled = 0;
        document.all.btncolor.disabled = 0;
        document.all.DropDownList11.disabled = !document.all.DropDownList11.disabled;
        document.all.TextBox17.disabled = !document.all.TextBox17.disabled;
        document.all.DropDownList13.disabled = !document.all.DropDownList13.disabled;
        document.all.TextBox19.disabled = !document.all.TextBox19.disabled;
        document.all.TextBox20.disabled = !document.all.TextBox20.disabled;
        chkdptset(false);
        document.all.chkl1.disabled = 0;
        document.all.chkl2.disabled = 0;
        document.all.chkl3.disabled = 0;
        document.all.chkl4.disabled = 0;
        document.all.cblang.disabled = 0;
        document.all.cblang0.disabled = 0;
        document.all.cblang1.disabled = 0;
        document.all.cblang2.disabled = 0;
        document.all.cblang3.disabled = 0;
        document.all.cblang4.disabled = 0;
        document.all.cblang5.disabled = 0;
        document.all.cblang6.disabled = 0;
        document.all.cblang7.disabled = 0;
        document.all.cblang8.disabled = 0;
        document.all.cblang9.disabled = 0;
        document.all.cbSb0.disabled = 0;
        document.all.cbSb1.disabled = 0;
        document.all.cbSb2.disabled = 0;
        document.all.cbSb3.disabled = 0;
        document.all.cbSb4.disabled = 0;
        document.all.cbSb5.disabled = 0
    }
}
function chklcheck() {
    var b = 0;
    if (document.getElementById("chklibuser").checked == 0) {
        document.getElementById("chkl1").checked = 0;
        document.getElementById("chkl2").checked = 0;
        document.getElementById("chkl3").checked = 0;
        document.getElementById("chkl4").checked = 0;
        document.getElementById("chkl1").disabled = 1;
        document.getElementById("chkl2").disabled = 1;
        document.getElementById("chkl3").disabled = 1;
        document.getElementById("chkl1").disabled = 1;
        chkdptset(true);
        b = 1
    } else if (document.getElementById("chkl1").checked || document.getElementById("chkl2").checked || document.getElementById("chkl3").checked || document.getElementById("chkl4").checked)
        b = 1;
    if (b == 1) {
        document.getElementById("CheckBox47").checked = 0;
        document.getElementById("CheckBox47").disabled = 1;
        document.getElementById("DropDownList11").disabled = 1;
        document.getElementById("DropDownList13").disabled = 1;
        document.getElementById("TextBox20").disabled = 1;
        document.getElementById("DropDownList11").value = "";
        document.getElementById("DropDownList13").value = "";
        document.getElementById("TextBox17").value = "";
        document.getElementById("TextBox19").value = "";
        document.getElementById("cblang").checked = 0;
        document.getElementById("cblang0").checked = 0;
        document.getElementById("cblang1").checked = 0;
        document.getElementById("cblang2").checked = 0;
        document.getElementById("cblang3").checked = 0;
        document.getElementById("cblang4").checked = 0;
        document.getElementById("cblang5").checked = 0;
        document.getElementById("cblang6").checked = 0;
        document.getElementById("cblang7").checked = 0;
        document.getElementById("cblang8").checked = 0;
        document.getElementById("cblang9").checked = 0;
        document.getElementById("cblang").disabled = 1;
        document.getElementById("cblang0").disabled = 1;
        document.getElementById("cblang1").disabled = 1;
        document.getElementById("cblang2").disabled = 1;
        document.getElementById("cblang3").disabled = 1;
        document.getElementById("cblang4").disabled = 1;
        document.getElementById("cblang5").disabled = 1;
        document.getElementById("cblang6").disabled = 1;
        document.getElementById("cblang7").disabled = 1;
        document.getElementById("cblang8").disabled = 1;
        document.getElementById("cblang9").disabled = 1;
        document.getElementById("cbSb0").checked = 0;
        document.getElementById("cbSb1").checked = 0;
        document.getElementById("cbSb2").checked = 0;
        document.getElementById("cbSb3").checked = 0;
        document.getElementById("cbSb4").checked = 0;
        document.getElementById("cbSb5").checked = 0;
        document.getElementById("cbSb0").disabled = 1;
        document.getElementById("cbSb1").disabled = 1;
        document.getElementById("cbSb2").disabled = 1;
        document.getElementById("cbSb3").disabled = 1;
        document.getElementById("cbSb4").disabled = 1;
        document.getElementById("cbSb5").disabled = 1;
        chkdptset(true)
    } else {
        document.getElementById("CheckBox47").disabled = 0;
        document.getElementById("DropDownList11").disabled = 0;
        document.getElementById("DropDownList13").disabled = 0;
        document.getElementById("TextBox20").disabled = 0;
        document.getElementById("cblang").disabled = 0;
        document.getElementById("cblang0").disabled = 0;
        document.getElementById("cblang1").disabled = 0;
        document.getElementById("cblang2").disabled = 0;
        document.getElementById("cblang3").disabled = 0;
        document.getElementById("cblang4").disabled = 0;
        document.getElementById("cblang5").disabled = 0;
        document.getElementById("cblang6").disabled = 0;
        document.getElementById("cblang7").disabled = 0;
        document.getElementById("cblang8").disabled = 0;
        document.getElementById("cblang9").disabled = 0;
        document.getElementById("cbSb0").disabled = 0;
        document.getElementById("cbSb1").disabled = 0;
        document.getElementById("cbSb2").disabled = 0;
        document.getElementById("cbSb3").disabled = 0;
        document.getElementById("cbSb4").disabled = 0;
        document.getElementById("cbSb5").disabled = 0;
        chkdptset(false)
    }
    var c = 0;
    for (i = 0; i < 4; i++) {
        var a = eval("document.all.cbSb" + i);
        if (a.checked == 1) {
            c = 1;
            break
        }
    }
    if (c == 1)
        for (i = 0; i <= 9; i++) {
            var a = eval("document.all.cblang" + i);
            a.disabled = 0
        }
    else
        for (i = 0; i <= 9; i++) {
            var a = eval("document.all.cblang" + i);
            a.disabled = 1
        }
}
function chklangtype(k, f) {
    var c = 0
      , d = 0
      , a = 0
      , e = 0
      , h = document.getElementById("chklibuser").checked == 0
      , g = document.getElementById("DropDownList10").selectedIndex != 0;
    for (i = 1; i <= 4; i++) {
        var j = eval("document.all.chkl" + i);
        if (j.checked == 1) {
            e = 1;
            break
        }
    }
    if (e == 1 || h || g)
        a = 1;
    else {
        for (i = 0; i < 4; i++) {
            var b = eval("document.all.cbSb" + i);
            if (b.checked == 1) {
                c = 1;
                break
            }
        }
        for (i = 0; i <= 9; i++) {
            var b = eval("document.all.cblang" + i);
            if (b.checked == 1) {
                d = 1;
                break
            }
        }
        if (c == 0 || d == 0)
            a = 0;
        else
            a = 1
    }
    f.IsValid = a
}
function chktype() {
    var b = 0;
    for (i = 0; i < 4; i++) {
        var a = eval("document.all.cbSb" + i);
        if (a.checked == 1) {
            b = 1;
            break
        }
    }
    if (b == 1) {
        for (i = 0; i <= 9; i++) {
            var a = eval("document.all.cblang" + i);
            a.disabled = 0
        }
        document.getElementById("chkl1").checked = 0;
        document.getElementById("chkl2").checked = 0;
        document.getElementById("chkl1").disabled = 1;
        document.getElementById("chkl2").disabled = 1;
        document.getElementById("chkl2").disabled = 1;
        document.getElementById("TextBox17").value = "";
        document.getElementById("TextBox19").value = "";
        document.getElementById("TextBox20").value = "";
        document.getElementById("TextBox17").disabled = 1;
        document.getElementById("TextBox19").disabled = 1;
        document.getElementById("TextBox20").disabled = 1;
        document.getElementById("DropDownList11").value = "";
        document.getElementById("DropDownList13").value = "";
        document.getElementById("DropDownList11").disabled = 1;
        document.getElementById("DropDownList13").disabled = 1
    } else {
        for (i = 0; i <= 9; i++) {
            var a = eval("document.all.cblang" + i);
            a.checked = 0;
            a.disabled = 1
        }
        document.getElementById("chkl1").disabled = 0;
        document.getElementById("chkl2").disabled = 0;
        document.getElementById("TextBox17").disabled = 0;
        document.getElementById("TextBox19").disabled = 0;
        document.getElementById("TextBox20").disabled = 0;
        document.getElementById("DropDownList11").disabled = 0;
        document.getElementById("DropDownList13").disabled = 0
    }
}
function bkmailjudge() {
    var b = eval("document.all.CheckBox5")
      , a = $("txtbkmail");
    if (b != null && b != undefined)
        if (b.checked) {
            a.disabled = 0;
            a.style.background = "#FFFFFF"
        } else {
            a.disabled = 1;
            a.style.background = "#E0E0E0";
            a.value = ""
        }
    var c = eval("document.all.CheckBox2");
    if (c != null && c != undefined)
        if (c.checked) {
            document.all.TextBox2.disabled = 0;
            document.all.TextBox2.style.background = "#FFFFFF"
        } else {
            document.all.TextBox2.disabled = 1;
            document.all.TextBox2.value = "";
            document.all.TextBox2.style.background = "#E0E0E0"
        }
}
function pwdjudge() {
    var a = eval("document.all.CheckBox1");
    if (a != null && a != undefined)
        if (a.checked) {
            document.all.TextBox1.disabled = 0;
            document.all.TextBox1.style.background = "#FFFFFF";
            document.all.TextBox2.disabled = 0;
            document.all.TextBox2.style.background = "#FFFFFF"
        } else {
            document.all.TextBox1.disabled = 1;
            document.all.TextBox1.value = "";
            document.all.TextBox1.style.background = "#E0E0E0";
            document.all.TextBox2.disabled = 1;
            document.all.TextBox2.value = "";
            document.all.TextBox2.style.background = "#E0E0E0"
        }
    var b = eval("document.all.CheckBox3");
    if (b != null && b != undefined)
        if (b.checked) {
            document.all.TextBox6.disabled = 0;
            document.all.TextBox6.style.background = "#FFFFFF"
        } else {
            document.all.TextBox6.disabled = 1;
            document.all.TextBox6.value = "";
            document.all.TextBox6.style.background = "#E0E0E0"
        }
    var c = eval("document.all.CheckBox2");
    if (c != null && c != undefined)
        if (c.checked) {
            document.all.TextBox3.disabled = 0;
            document.all.TextBox3.style.background = "#FFFFFF"
        } else {
            document.all.TextBox3.disabled = 1;
            document.all.TextBox3.value = "";
            document.all.TextBox3.style.background = "#E0E0E0"
        }
    var d = eval("document.all.CheckBox5");
    if (d != null && d != undefined)
        if (d.checked) {
            document.all.txtbkmail.disabled = 0;
            document.all.txtbkmail.style.background = "#FFFFFF"
        } else {
            document.all.txtbkmail.disabled = 1;
            document.all.txtbkmail.value = "";
            document.all.txtbkmail.style.background = "#E0E0E0"
        }
}
function libuserddl() {
    if (document.all.DropDownList10.selectedIndex != 0) {
        document.all.chkl1.checked = 0;
        document.all.chkl2.checked = 0;
        document.all.chkl3.checked = 0;
        document.all.chkl4.checked = 0;
        document.all.chkl1.disabled = 1;
        document.all.chkl2.disabled = 1;
        document.all.chkl3.disabled = 1;
        document.all.chkl4.disabled = 1;
        document.all.cblang.checked = 0;
        document.all.cblang0.checked = 0;
        document.all.cblang1.checked = 0;
        document.all.cblang2.checked = 0;
        document.all.cblang3.checked = 0;
        document.all.cblang4.checked = 0;
        document.all.cblang5.checked = 0;
        document.all.cblang6.checked = 0;
        document.all.cblang7.checked = 0;
        document.all.cblang8.checked = 0;
        document.all.cblang9.checked = 0;
        document.all.cblang.disabled = 1;
        document.all.cblang0.disabled = 1;
        document.all.cblang1.disabled = 1;
        document.all.cblang2.disabled = 1;
        document.all.cblang3.disabled = 1;
        document.all.cblang4.disabled = 1;
        document.all.cblang5.disabled = 1;
        document.all.cblang6.disabled = 1;
        document.all.cblang7.disabled = 1;
        document.all.cblang8.disabled = 1;
        document.all.cblang9.disabled = 1;
        document.all.cbSb0.checked = 0;
        document.all.cbSb1.checked = 0;
        document.all.cbSb2.checked = 0;
        document.all.cbSb3.checked = 0;
        document.all.cbSb4.checked = 0;
        document.all.cbSb0.disabled = 1;
        document.all.cbSb1.disabled = 1;
        document.all.cbSb2.disabled = 1;
        document.all.cbSb3.disabled = 1;
        document.all.cbSb4.disabled = 1
    } else {
        document.all.chkl1.disabled = 0;
        document.all.chkl2.disabled = 0;
        document.all.chkl3.disabled = 0;
        document.all.chkl4.disabled = 0;
        document.all.cblang.disabled = 0;
        document.all.cblang0.disabled = 0;
        document.all.cblang1.disabled = 0;
        document.all.cblang2.disabled = 0;
        document.all.cblang3.disabled = 0;
        document.all.cblang4.disabled = 0;
        document.all.cblang5.disabled = 0;
        document.all.cblang6.disabled = 0;
        document.all.cblang7.disabled = 0;
        document.all.cblang8.disabled = 0;
        document.all.cblang9.disabled = 0;
        document.all.cbSb0.disabled = 0;
        document.all.cbSb1.disabled = 0;
        document.all.cbSb2.disabled = 0;
        document.all.cbSb3.disabled = 0;
        document.all.cbSb4.disabled = 0
    }
}
function prjnetcheck() {
    chkrecommset();
    chkdpt();
    moditearcher();
    if ($("CheckBox3").checked == 0) {
        $("CheckBox10").checked = 0;
        $("CheckBox10").disabled = 1;
        $("CheckBox11").checked = 0;
        $("CheckBox11").disabled = 1;
        $("CheckBox12").checked = 0;
        $("CheckBox12").disabled = 1;
        $("CheckBox13").checked = 0;
        $("CheckBox13").disabled = 1;
        $("CheckBox14").checked = 0;
        $("CheckBox14").disabled = 1;
        $("CheckBox15").checked = 0;
        $("CheckBox15").disabled = 1;
        $("CheckBox25").checked = 0;
        $("CheckBox25").disabled = 1
    } else {
        $("CheckBox10").disabled = 0;
        $("CheckBox11").disabled = 0;
        $("CheckBox12").disabled = 0;
        $("CheckBox13").disabled = 0;
        $("CheckBox14").disabled = 0;
        $("CheckBox15").disabled = 0;
        $("CheckBox25").disabled = 0
    }
    if ($("CheckBox7").checked == 0) {
        $("CheckBox22").checked = 0;
        $("CheckBox22").disabled = 1
    } else
        $("CheckBox22").disabled = 0;
    libdupchk();
    var a = $("ddlGrp1_1").selectedIndex
      , b = $("ddlGrp1_2").selectedIndex
      , c = $("ddlGrp1_3").selectedIndex;
    if (a != 0 || b != 0 || c != 0 || $F("ddlGrp1_4") != "-1") {
        document.all.CheckBox20.checked = 0;
        document.all.CheckBox20.disabled = 1;
        document.all.CheckBox8.disabled = 0
    } else {
        document.all.CheckBox20.disabled = 0;
        document.all.CheckBox8.disabled = 1
    }
}
function chkdptset(c) {
    for (var b = c, a = 0; a < document.getElementById("chkdpt").getElementsByTagName("input").length; a++) {
        document.getElementById("chkdpt_" + a).disabled = b;
        if (b == 1)
            document.getElementById("chkdpt_" + a).checked = 0
    }
}
function chkdptselect() {
    var b = 0
      , c = document.getElementById("chklibuser").checked;
    if (c == 1) {
        document.getElementById("CheckBox47").disabled = 0;
        document.getElementById("DropDownList11").disabled = 0;
        for (var a = 0; a < document.getElementById("chkdpt").getElementsByTagName("input").length; a++)
            if (document.getElementById("chkdpt_" + a).checked == 1)
                b = 1;
        if (b == 1) {
            document.all.chkl1.checked = 0;
            document.all.chkl2.checked = 0;
            document.all.chkl3.checked = 0;
            document.all.chkl4.checked = 0;
            document.all.chkl1.disabled = 1;
            document.all.chkl2.disabled = 1;
            document.all.chkl3.disabled = 1;
            document.all.chkl4.disabled = 1;
            document.all.cblang.checked = 0;
            document.all.cblang0.checked = 0;
            document.all.cblang1.checked = 0;
            document.all.cblang2.checked = 0;
            document.all.cblang3.checked = 0;
            document.all.cblang4.checked = 0;
            document.all.cblang5.checked = 0;
            document.all.cblang6.checked = 0;
            document.all.cblang7.checked = 0;
            document.all.cblang8.checked = 0;
            document.all.cblang9.checked = 0;
            document.all.cblang.disabled = 1;
            document.all.cblang0.disabled = 1;
            document.all.cblang1.disabled = 1;
            document.all.cblang2.disabled = 1;
            document.all.cblang3.disabled = 1;
            document.all.cblang4.disabled = 1;
            document.all.cblang5.disabled = 1;
            document.all.cblang6.disabled = 1;
            document.all.cblang7.disabled = 1;
            document.all.cblang8.disabled = 1;
            document.all.cblang9.disabled = 1;
            document.all.cbSb0.checked = 0;
            document.all.cbSb1.checked = 0;
            document.all.cbSb2.checked = 0;
            document.all.cbSb3.checked = 0;
            document.all.cbSb4.checked = 0;
            document.all.cbSb0.disabled = 1;
            document.all.cbSb1.disabled = 1;
            document.all.cbSb2.disabled = 1;
            document.all.cbSb3.disabled = 1;
            document.all.cbSb4.disabled = 1
        } else {
            document.all.chkl1.disabled = 0;
            document.all.chkl2.disabled = 0;
            document.all.chkl3.disabled = 0;
            document.all.chkl4.disabled = 0;
            document.all.cblang.disabled = 0;
            document.all.cblang0.disabled = 0;
            document.all.cblang1.disabled = 0;
            document.all.cblang2.disabled = 0;
            document.all.cblang3.disabled = 0;
            document.all.cblang4.disabled = 0;
            document.all.cblang5.disabled = 0;
            document.all.cblang6.disabled = 0;
            document.all.cblang7.disabled = 0;
            document.all.cblang8.disabled = 0;
            document.all.cblang9.disabled = 0;
            document.all.cbSb0.disabled = 0;
            document.all.cbSb1.disabled = 0;
            document.all.cbSb2.disabled = 0;
            document.all.cbSb3.disabled = 0;
            document.all.cbSb4.disabled = 0
        }
    } else {
        document.getElementById("CheckBox47").disabled = 1;
        document.getElementById("DropDownList11").disabled = 1
    }
}
function emailtest(a, e, d) {
    var b = a.value.trim()
      , c = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if (b.length > 0) {
        var f = c.test(b);
        if (!f) {
            alert(e);
            a.focus();
            document.all.txtmailbj.value = "0";
            return false
        } else
            document.all.txtmailbj.value = "1"
    } else {
        alert(d);
        a.focus();
        document.all.txtmailbj.value = "0";
        return false
    }
}
function getlibuser(e) {
    var c = e.value.trim()
      , a = 0
      , b = 0
      , d = document.all.DropDownList46.length;
    if (c != "")
        for (a = 0; a < d; a++)
            if (c == document.all.DropDownList46.options[a].text) {
                b = 1;
                document.all.DropDownList46.selectedIndex = a;
                break
            }
    if (!b)
        document.all.DropDownList46.selectedIndex = 0
}
function libuserddladd(m, k, l) {
    var i = m.value.trim()
      , j = document.getElementById(k);
    document.all.TextBox15_2.value = "";
    for (var g = j.options.length; g >= 0; g--)
        j.remove(g);
    if (i != "") {
        var h = 0
          , c = document.getElementById("DropDownList46");
        c.selectedIndex = 0;
        for (var e = document.getElementById(l), a = 0; a < e.options.length; a++)
            if (i == e.options[a].text) {
                var b = document.createElement("option");
                b.text = e.options[a].text;
                b.value = e.options[a].value;
                b.selectedIndex = a;
                for (var d = 0; d < c.options.length; d++) {
                    var f = document.createElement("option");
                    f.text = c.options[d].text;
                    f.value = c.options[d].value;
                    if (f.text == b.value) {
                        document.all.TextBox15_2.value = b.value;
                        h = 1;
                        c.selectedIndex = d;
                        break
                    }
                }
            }
        if (h == 0)
            document.all.TextBox15_2.value = "-1"
    }
}
function chksel(g, f) {
    if (document.getElementById("chklibuser").checked == 1) {
        for (var a = 0, c = 1; c < 5; c++)
            if (document.getElementById("chkl" + c).checked == 1) {
                a = 1;
                break
            }
        if (a == 0)
            for (var d = 1; d <= 3; d++)
                if (document.getElementById("cbSb" + d).checked == 1) {
                    a = 1;
                    break
                }
        if (a == 0)
            for (var e = 0; e < 10; e++)
                if (document.getElementById("cblang" + e).checked == 1) {
                    a = 1;
                    break
                }
        if (a == 0)
            for (var b = 0; b < document.getElementById("chkdpt").getElementsByTagName("input").length; b++)
                if (document.getElementById("chkdpt_" + b).checked == 1) {
                    a = 1;
                    break
                }
        if (a == 0)
            f.IsValid = 0;
        else
            f.IsValid = 1
    }
}
function getpwd() {
    var a = document.getElementById("txtbj").value;
    if (a == 1)
        window.returnValue = document.getElementById("txtpwd").value;
    else
        window.returnValue = ""
}
function returnColor() {
    var b = "FFFFFF"
      , a = dlgHelper.ChooseColorDlg(b).toString(16)
      , c = document.getElementById("txtcr1");
    c.style.backgroundColor = (a.length < 6 ? "000000".substring(0, 6 - a.length) : "") + a;
    b = a;
    document.getElementById("txtcolor").value = b
}
function allprj() {
    var a = document.all("CheckBoxList2")
      , c = a.all.tags("input").length;
    for (i = 0; i < c; i++) {
        var b = "CheckBoxList2_" + i;
        document.all[b].checked = 1
    }
}
function subjectChange(a) {
    var b = a.selectedIndex
      , c = a.options(b).value;
    if (c == "") {
        document.getElementById("Button1").disabled = 1;
        if (document.getElementById("Button2") != undefined)
            document.getElementById("Button2").disabled = 1
    } else {
        document.getElementById("Button1").disabled = 0;
        if (document.getElementById("Button2") != undefined)
            document.getElementById("Button2").disabled = 0
    }
}
function getchk() {
    if (document.all.RadioButton1.checked == 1)
        document.getElementById("txtbj").value = -1;
    else
        document.getElementById("txtbj").value = -2
}
function prjlibset() {
    if ($("CheckBox7").checked == 0) {
        $("CheckBox22").checked = 0;
        $("CheckBox22").disabled = 1
    } else
        $("CheckBox22").disabled = 0;
    libdupchk()
}
function fStip6(a, e, f, g, h) {
    var d = document.all[h]
      , c = getCheckedValue(d);
    a.value = f;
    a.disabled = 1;
    var b = g.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(e + "&g1=" + c)
}
function ddladdsubject(j, f, g) {
    for (var h = j.value.trim(), d = document.getElementById(f), e = d.options.length; e > 0; e--)
        d.remove(e);
    for (var b = document.getElementById(g), a = 0; a < b.options.length; a++) {
        var i = b.options[a].value.indexOf(h);
        if (i > -1) {
            var c = document.createElement("option");
            c.text = b.options[a].value;
            c.value = b.options[a].value;
            d.options.add(c)
        }
    }
}
function chkCnt(f, b, e, d, h) {
    var c = 0
      , j = f.value
      , a = 0;
    for (i = 1; i <= e; i++) {
        var g = document.getElementById("chk_" + b + "_" + i);
        if (g.checked == 1)
            a = a + 1
    }
    if (a != 0)
        if (a > d) {
            document.getElementById("txt_" + b).value = d;
            c = 1
        } else
            document.getElementById("txt_" + b).value = a;
    else
        document.getElementById("txt_" + b).value = "";
    if (c) {
        alert(h);
        event.srcElement.checked = 0
    }
}
function findbkstr(b, d, a) {
    var c = document.getElementById("txtbkstor").value;
    if (b.checked == 0)
        if (c.indexOf(d) > -1) {
            alert(a);
            event.srcElement.checked = 1
        }
}
function List1Strchange() {
    var a;
    if (document.getElementById("ListBox1").length == 0)
        return false;
    a = document.getElementById("ListBox1").selectedIndex;
    if (a < 0)
        return false;
    var b = document.getElementById("ListBox1").options(a).text;
    document.getElementById("txtbkstor").value = document.getElementById("txtbkstor").value + b + ";"
}
function List2Strchange() {
    var a;
    if (document.getElementById("ListBox2").length == 0)
        return false;
    a = document.getElementById("ListBox2").selectedIndex;
    if (a < 0)
        return false;
    var c = document.getElementById("ListBox2").options(a).text + ";"
      , b = document.getElementById("txtbkstor").value
      , d = b.indexOf(c);
    if (d > -1)
        document.getElementById("txtbkstor").value = b.replace(c, "")
}
function fdobackup(b, a, c) {
    document.getElementById("ckid1").disabled = 1;
    alert(c);
    frames.__h.location.replace(b + "&sdb=" + a)
}
function chkbackup() {
    if (document.getElementById("CheckBox1").checked == 1) {
        for (i = 0; i <= 9; i++) {
            var a = eval("document.all.cba" + i);
            a.checked = 1
        }
        document.getElementById("CheckBox46").disabled = 0
    } else
        document.getElementById("CheckBox46").disabled = 1
}
function judgeRadiobutton() {
    if (document.getElementById("RadioButton1").checked == 1 || document.getElementById("RadioButton3").checked == 1) {
        document.getElementById("RadioButton4").disabled = 1;
        document.getElementById("RadioButton5").disabled = 1;
        document.getElementById("RadioButton6").disabled = 1
    } else if (document.getElementById("RadioButton2").checked == 1) {
        document.getElementById("RadioButton4").disabled = 0;
        document.getElementById("RadioButton5").disabled = 0;
        document.getElementById("RadioButton6").disabled = 0
    }
}
function ddlcomparedate(f, e, b) {
    var d;
    d = f.selectedIndex;
    var g = f.options[d].value
      , c = new Date
      , a = c.getYear()
      , i = document.getElementById("txtlan").value;
    if (g != "") {
        var h = c.getYear() + "-" + g + "-01";
        if (e >= h)
            a = c.getYear();
        else
            a = c.getYear() - 1
    }
    if (i == "0")
        a = a - 1911;
    b = replaceAll(b, "%1", e);
    b = replaceAll(b, "%2", a);
    document.getElementById("Label73").innerHTML = b
}
function checkandgif(a, b) {
    if (confirm(a)) {
        document.getElementById("Image1").style.display = "block";
        document.getElementById("labeltip").style.display = "block";
        document.getElementById("labeltip").innerText = b
    } else
        return false
}
function chkallow() {
    if (document.getElementById("CheckBox3").checked == 1) {
        document.getElementById("TextBox4").disabled = 0;
        document.getElementById("RequiredFieldValidator2").controltovalidate = "TextBox4"
    } else {
        document.getElementById("TextBox4").disabled = 1;
        document.getElementById("RequiredFieldValidator2").controltovalidate = "txtbj"
    }
    if (document.getElementById("CheckBox4").checked == 1) {
        document.getElementById("TextBox8").disabled = 0;
        document.getElementById("RequiredFieldValidator1").controltovalidate = "TextBox8"
    } else {
        document.getElementById("TextBox8").disabled = 1;
        document.getElementById("RequiredFieldValidator1").controltovalidate = "txtmailbj"
    }
    if (document.getElementById("CheckBox5").checked == 1)
        document.getElementById("txtbkmail").disabled = 0;
    else
        document.getElementById("txtbkmail").disabled = 1;
    if (document.getElementById("CheckBox2").checked == 1)
        document.getElementById("TextBox2").disabled = 0;
    else
        document.getElementById("TextBox2").disabled = 1
}
function ddladddpt(j, f, g) {
    for (var h = j.value.trim(), d = document.getElementById(f), e = d.options.length; e >= 0; e--)
        d.remove(e);
    for (var b = document.getElementById(g), a = 0; a < b.options.length; a++) {
        var i = b.options[a].value.indexOf(h);
        if (i > -1) {
            var c = document.createElement("option");
            c.text = b.options[a].text;
            c.value = b.options[a].value;
            d.options.add(c)
        }
    }
}
function fStipbuy(a, e, f, g, h) {
    var d = document.all[h]
      , c = getCheckedValue(d);
    a.value = f;
    a.disabled = 1;
    var b = g.split("#");
    for (i = 0; i < b.length; i++)
        document.all[b[i]].style.display = "none";
    frames.__h.location.replace(e + "&g1=" + c)
}
function ddlbuychoice() {
    var a = document.getElementById("DropDownList1").value;
    document.getElementById("txtsta").value = a;
    var b = document.getElementById("DropDownList2").value;
    document.getElementById("txtseller").value = b
}
function updatebkbuy(a) {
    document.getElementById("Image1").style.display = "block";
    document.getElementById("labeltip").style.display = "block";
    document.getElementById("labeltip").innerText = a
}
function getColor() {
    var b = "FFFFFF"
      , a = dlgHelper.ChooseColorDlg(b).toString(16);
    if (a != "ffffff") {
        var c = document.getElementById("txtcr1");
        c.style.backgroundColor = (a.length < 6 ? "000000".substring(0, 6 - a.length) : "") + a;
        b = a;
        document.getElementById("txtcolor").value = b
    }
}
function libdupchk() {
    if ($("CheckBox19").checked == 0 && $("CheckBox7").checked == 0) {
        $("Radiobutton3").disabled = 1;
        $("Radiobutton4").disabled = 1
    } else {
        $("Radiobutton3").disabled = 0;
        $("Radiobutton4").disabled = 0
    }
}
function chkpwdbj(a) {
    if (a == 1)
        if ($("CheckBox99").checked == 1 && $("TextBox4").value != "" || $("CheckBox99").checked == 0)
            $("TextBox4bj").value = "1";
        else
            $("TextBox4bj").value = "";
    else if ($("TextBox4").value != "")
        $("TextBox4bj").value = "1";
    else
        $("TextBox4bj").value = ""
}
function updatepolicy(a) {
    document.getElementById("UserControl1_Label1").innerText = a
}
function getnoisbn() {
    document.getElementById("UserControl4_HyperLink1").click()
}
function checkCountM(a, b, c, d) {
    ddltypeselect(document.getElementById("Label10").value);
    checkCount(a, b, c, d);
    if (document.getElementById("txtset").value == "0" && document.all.DropDownList2.selectedIndex == 0)
        document.getElementById("Button1").disabled = 1
}
function checkCountM2(a, b, c, d) {
    checkCount2(a, b, c, d);
    if (document.getElementById("txtset").value == "0")
        document.getElementById("LinkButton1").disabled = 1
}
function addtxtCnt() {
    var a = document.getElementById("txtCnt").value;
    a = parseInt(a) + 1;
    document.getElementById("txtCnt").value = a
}
function recommendConfirm(a) {
    if (confirm(a))
        document.getElementById("txtrecommendbj").value = "1";
    else
        document.getElementById("txtrecommendbj").value = "0"
}
function yanchange(a, b, c) {
    var e = eval("document.all." + a.id)
      , d = a.selectedIndex
      , f = a.options(d).value;
    if (e.id == "DropDownList33")
        if (f != "") {
            b.selectedIndex = 1;
            c.selectedIndex = 0
        } else
            b.selectedIndex = 0;
    else {
        b.selectedIndex = 0;
        c.selectedIndex = 0
    }
}
function chkfield(b) {
    var a = b.id
      , c = b.checked;
    if (a == "CheckBox1")
        if ($("CheckBox1").checked == 1)
            for (k = 2; k <= 4; k++) {
                $("cbg" + k).checked = 1;
                for (i = 1; i <= 10; i++)
                    if (k == 4 && i == 9)
                        if (i == 9 && $F("txtlargessset") == "1")
                            $("cbg" + k + "_" + i).checked = 0;
                        else
                            $("cbg" + k + "_" + i).checked = 1;
                    else
                        $("cbg" + k + "_" + i).checked = 1
            }
        else
            for (k = 2; k <= 4; k++) {
                $("cbg" + k).checked = 0;
                for (i = 1; i <= 10; i++)
                    $("cbg" + k + "_" + i).checked = 0
            }
    else {
        $("CheckBox1").checked = 0;
        for (k = 2; k <= 4; k++)
            if (a == "cbg" + k)
                if (c == 1)
                    for (i = 1; i <= 10; i++)
                        if (k == 4 && i == 9)
                            if (i == 9 && $F("txtlargessset") == "1")
                                $("cbg" + k + "_" + i).checked = 0;
                            else
                                $("cbg" + k + "_" + i).checked = 1;
                        else
                            $("cbg" + k + "_" + i).checked = 1;
                else
                    for (i = 1; i <= 10; i++)
                        $("cbg" + k + "_" + i).checked = 0;
            else if (a.indexOf("cbg" + k) > -1)
                if (c == 0) {
                    $("cbg" + k).checked = 0;
                    break
                }
    }
}
function checkCount2(k, e, n, o) {
    var a = document.getElementById(k)
      , g = a.getElementsByTagName("label")
      , m = document.getElementById("txtmdbj").value
      , d = 0
      , b = 0
      , c = 0;
    for (i = 0; i < a.all.tags("input").length; i++) {
        if (a.all.tags("input")[i].type == "checkbox")
            if (a.all.tags("input")[i].checked)
                b++;
        if (b > e) {
            c = 1;
            break
        } else {
            var j = g[i].innerText
              , f = a.all.tags("input")[i].checked;
            if (f)
                if (m.indexOf(j) > -1)
                    d = 1
        }
    }
    if (b == 0 && e != 1)
        c = 1;
    if (c)
        if (b == 0) {
            alert(o);
            event.srcElement.checked = 1
        } else {
            alert(n);
            event.srcElement.checked = 0
        }
    else if (d == 1) {
        document.getElementById("Label37").style.display = "block";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "block";
        document.getElementById("ddlsubject").style.display = "block";
        var h = document.getElementById("ddlsubject").selectedIndex
          , l = document.getElementById("ddlsubject").options(h).value;
        if (document.getElementById("LinkButton1") != undefined)
            if (l != "") {
                document.getElementById("LinkButton1").disabled = 0;
                document.getElementById("LinkButton6").disabled = 0
            } else {
                document.getElementById("LinkButton1").disabled = 1;
                document.getElementById("LinkButton6").disabled = 1
            }
    } else {
        document.getElementById("Label37").style.display = "none";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "none";
        document.getElementById("ddlsubject").selectedIndex = 0;
        document.getElementById("ddlsubject").style.display = "none";
        if (document.getElementById("LinkButton1") != undefined)
            document.getElementById("LinkButton1").disabled = 0;
        if (document.getElementById("LinkButton6") != undefined)
            document.getElementById("LinkButton6").disabled = 0
    }
}
function subjectChange2(a) {
    var b = a.selectedIndex
      , c = a.options(b).value;
    if (c == "") {
        if (document.getElementById("LinkButton1") != undefined)
            document.getElementById("LinkButton1").disabled = 1;
        if (document.getElementById("LinkButton6") != undefined)
            document.getElementById("LinkButton6").disabled = 1
    } else {
        if (document.getElementById("LinkButton1") != undefined)
            document.getElementById("LinkButton1").disabled = 0;
        if (document.getElementById("LinkButton6") != undefined)
            document.getElementById("LinkButton6").disabled = 0
    }
}
function recommendMudi() {
    document.getElementById("Panel2").style.display = "block"
}
function ddltypeselect() {
    blink("Label40");
    document.all.txttype.value = document.all.DropDownList2.selectedIndex;
    document.getElementById("txtisbnbk").value = document.getElementById("Label10").innerText;
    if (document.getElementById("txtisbnbk").value == "")
        if (document.all.DropDownList2.selectedIndex != 0) {
            document.getElementById("Button1").disabled = 0;
            document.getElementById("LabelTip").style.visibility = "hidden"
        } else if (document.getElementById("txtisbnset") != undefined && document.getElementById("txtisbnset").value == "1") {
            document.getElementById("Button1").disabled = 1;
            document.getElementById("LabelTip").style.visibility = "visible"
        } else {
            document.getElementById("Button1").disabled = 0;
            document.getElementById("LabelTip").style.visibility = "hidden"
        }
}
function booksellerChoice() {
    if (document.getElementById("chklang1").checked == 0 && document.getElementById("chky1").checked == 0)
        if (document.getElementById("stipseller") != null && document.getElementById("stipseller") != undefined) {
            document.getElementById("stipseller").value = "";
            stip1set()
        } else
            document.all.stip1.disabled = 0;
    else if (document.getElementById("stipseller") != null && document.getElementById("stipseller") != undefined) {
        document.getElementById("stipseller").value = "1";
        stip1set()
    } else
        document.all.stip1.disabled = 1
}
function selalldpt(a) {
    var b = document.all.length;
    for (i = 0; i < b; i++)
        if (document.all(i).tagName == "INPUT")
            if (document.all(i).name.indexOf("chkdpt") == 0) {
                document.all(i).checked = a.checked;
                document.all(i).disabled = !a.checked
            }
    if (!a.checked)
        document.getElementById("DropDownList11").value = "";
    document.getElementById("DropDownList11").disabled = !a.checked
}
function checkumudi(g, f, o, h, e) {
    if (document.getElementById(g) != undefined) {
        var a = document.getElementById(g)
          , k = a.getElementsByTagName("label")
          , n = document.getElementById("txtmdbj").value
          , m = 0
          , b = 0
          , c = 0;
        for (i = 0; i < a.all.tags("input").length; i++) {
            if (a.all.tags("input")[i].type == "checkbox")
                if (a.all.tags("input")[i].checked)
                    b++;
            if (b > f) {
                c = 1;
                break
            } else {
                var l = k[i].innerText
                  , j = a.all.tags("input")[i].checked;
                if (j)
                    if (n.indexOf(l) > -1)
                        m = 1
            }
        }
        if (b == 0 && f != 1)
            c = 1;
        if (c) {
            if (b == 0) {
                alert(h);
                event.srcElement.checked = 1
            } else {
                alert(o);
                event.srcElement.checked = 0
            }
            var d = document.all.DropDownList3.selectedIndex
              , p = document.all.txtallowisbn.value;
            d == 0 && recommendConfirm(e)
        } else if (b == 0 && f > 0)
            alert(h);
        else {
            var d = document.all.DropDownList3.selectedIndex
              , p = document.all.txtallowisbn.value;
            d == 0 && recommendConfirm(e)
        }
    } else {
        var d = document.all.DropDownList3.selectedIndex
          , p = document.all.txtallowisbn.value;
        d == 0 && recommendConfirm(e)
    }
}
function checkubkCount(k, e, n, o) {
    var a = document.getElementById(k)
      , h = document.all.DropDownList3.selectedIndex
      , p = document.all.txtallowisbn.value
      , g = a.getElementsByTagName("label")
      , m = document.getElementById("txtmdbj").value
      , d = 0
      , b = 0
      , c = 0;
    for (i = 0; i < a.all.tags("input").length; i++) {
        if (a.all.tags("input")[i].type == "checkbox")
            if (a.all.tags("input")[i].checked)
                b++;
        if (b > e) {
            c = 1;
            break
        } else {
            var j = g[i].innerText
              , f = a.all.tags("input")[i].checked;
            if (f)
                if (m.indexOf(j) > -1)
                    d = 1
        }
    }
    if (b == 0 && e != 1)
        c = 1;
    if (c)
        if (b == 0) {
            alert(o);
            event.srcElement.checked = 1
        } else {
            alert(n);
            event.srcElement.checked = 0
        }
    else if (d == 1) {
        document.getElementById("Label37").style.display = "block";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "block";
        document.getElementById("ddlsubject").style.display = "block";
        var h = document.getElementById("ddlsubject").selectedIndex
          , l = document.getElementById("ddlsubject").options(h).value;
        if (l != "") {
            document.getElementById("Button1").disabled = 0;
            if (document.getElementById("Button2") != undefined)
                document.getElementById("Button2").disabled = 0
        } else {
            document.getElementById("Button1").disabled = 1;
            if (document.getElementById("Button2") != undefined)
                document.getElementById("Button2").disabled = 1
        }
    } else {
        document.getElementById("Label37").style.display = "none";
        document.getElementById("TextBox14").value = "";
        document.getElementById("TextBox14").style.display = "none";
        document.getElementById("ddlsubject").selectedIndex = 0;
        document.getElementById("ddlsubject").style.display = "none";
        document.getElementById("Button1").disabled = 0;
        if (document.getElementById("Button2") != undefined)
            document.getElementById("Button2").disabled = 0
    }
}
function ddlrsgChoice(c, b) {
    var d = document.all.DropDownList5.selectedIndex, g = document.all.DropDownList5.options(d).value, a = g.split(";"), h;
    if (a.length >= 2) {
        var i = a[0]
          , e = a[1]
          , f = a[2];
        document.getElementById("Label36").innerText = f;
        document.getElementById("HyperLink2").style.visibility = "visible";
        document.getElementById("HyperLink2").href = "remsgs.aspx?ff=19&ubj=1&num=" + e + "&bookid=" + c + "&outdate=" + b
    } else
        document.getElementById("HyperLink2").style.visibility = "hidden"
}
function superstarset() {
    if (document.getElementById("CheckBox37").checked == 1)
        document.getElementById("CheckBox38").disabled = 0;
    else {
        document.getElementById("CheckBox38").checked = 0;
        document.getElementById("CheckBox38").disabled = 1
    }
    partnameset()
}
function partnameset() {
    if (document.getElementById("CheckBox38").checked == 1) {
        document.getElementById("cgname1").disabled = 0;
        document.getElementById("cgname2").disabled = 0;
        document.getElementById("cgname3").disabled = 0;
        document.getElementById("cgname1").checked = 1
    } else {
        document.getElementById("cgname1").checked = 0;
        document.getElementById("cgname2").checked = 0;
        document.getElementById("cgname3").checked = 0;
        document.getElementById("cgname1").disabled = 1;
        document.getElementById("cgname2").disabled = 1;
        document.getElementById("cgname3").disabled = 1
    }
}
function getCheckedMessage() {
    for (var c = "", d = document.getElementById("RadioButtonList2"), b = d.getElementsByTagName("input"), a = 0; a < b.length; a++)
        if (b[a].type == "radio")
            if (b[a].checked)
                c = b[a].nextSibling.innerHTML;
    document.getElementById("TextBox1").value = c
}
function getCheckedMessage2() {
    for (var c = "", d = document.getElementById("RadioButtonList2"), b = d.getElementsByTagName("input"), a = 0; a < b.length; a++)
        if (b[a].type == "radio")
            if (b[a].checked)
                c = b[a].nextSibling.innerHTML;
    document.getElementById("TextBox10").value = c
}
function multiPrjSelect() {
    var a = document.getElementById("txtMprjidetity").value;
    if (a == "1") {
        document.getElementById("RadioButtonList1").click();
        changeget(document.getElementById("RadioButtonList1"))
    }
}
function blink(b) {
    var a = "";
    if (document.all)
        a += "var   el   =   document.all." + b + ";";
    else if (document.getElementById)
        a += 'var   el   =   document.getElementById("' + b + '");';
    a += 'el.style.visibility   =   el.style.visibility   ==   "hidden"   ?   "visible"   :   "hidden"';
    (document.all || document.getElementById) && setInterval(a, 500)
}
function getCalendar1() {
    if (document.getElementById("Calendar1").style.display == "none")
        document.getElementById("Calendar1").style.display = "inline";
    else
        document.getElementById("Calendar1").style.display = "none"
}
function getCalendar2() {
    if (document.getElementById("Calendar2").style.display == "none")
        document.getElementById("Calendar2").style.display = "inline";
    else
        document.getElementById("Calendar2").style.display = "none"
}
function exec(a) {
    //console.log("exec")
    backdelay(a);
}
function backdelay(a) { //時間倒數
    //console.log("backdelay", a)
    var b = ""
      , c = document.getElementById("UserControl1_lblsec")
      , d = document.getElementById("UserControl1_lblstipset").innerText;//d 目前 1
    b = document.getElementById("UserControl1_sectip").innerText;
    var i = Math.floor(a / 60)
      , e = a % 60
      , j = b.replace("%1", i).replace("%2", e); //i=分鐘, e=秒
    if (d == "1")
        c.innerHTML = j;
    else
        c.innerHTML = "";
    
    var g = document.getElementById("UserControl1_lblurl").innerText;
    if (a == 0)
        location.href = g; //倒數到 0
    
    var f = a - 1;
    setTimeout("backdelay(" + f + ")", 1e3);
    var h = !-[1];
    h && window.setInterval("CollectGarbage();", 1e4);
}
function chkdenytodo(a, c) {
    var b = document.all.DropDownList1.selectedIndex
      , d = ";" + document.all.DropDownList1.options(b).value + ";";
    document.getElementById("txtbkdyid").value = "0";
    if (a.indexOf(d) > -1)
        if (confirm(c))
            document.getElementById("txtbkdyid").value = "1";
}
function checkstatodo(a, e, c) {
    if (confirm(e)) {
        var b = document.all.DropDownList1.selectedIndex
          , d = ";" + document.all.DropDownList1.options(b).value + ";";
        document.getElementById("txtbkdyid").value = "0";
        if (a.indexOf(d) > -1)
            if (confirm(c))
                document.getElementById("txtbkdyid").value = "1"
    } else
        return false
}
function updatebkstabuy(c, a, d) {
    var b = document.all.DropDownList1.selectedIndex
      , e = ";" + document.all.DropDownList1.options(b).value + ";";
    document.getElementById("txtbkdyid").value = "0";
    if (a.indexOf(e) > -1)
        if (confirm(d))
            document.getElementById("txtbkdyid").value = "1";
    document.getElementById("Image1").style.display = "block";
    document.getElementById("labeltip").style.display = "block";
    document.getElementById("labeltip").innerText = c
}
function cancelset() {
    if (document.getElementById("CheckBox42").checked == 0) {
        document.getElementById("DropDownList10").disabled = 1;
        document.getElementById("Label81").disabled = 1
    } else {
        document.getElementById("DropDownList10").disabled = 0;
        document.getElementById("Label81").disabled = 0
    }
}
function chktuijian(a) {
    if (a != null && a != undefined) {
        var b = a.name;
        if (b == "CheckBox44") {
            if (document.getElementById("CheckBox44").checked == 1)
                document.getElementById("CheckBox43").checked = 0
        } else if (b == "CheckBox43")
            if (document.getElementById("CheckBox43").checked == 1)
                document.getElementById("CheckBox44").checked = 0
    }
    if (document.getElementById("CheckBox43").checked == 1) {
        document.getElementById("CheckBox39").checked = 1;
        document.getElementById("CheckBox39").disabled = 1
    } else
        document.getElementById("CheckBox39").disabled = 0
}
function ddlisbn() {
    var a = document.all.DropDownList3.selectedIndex
      , b = document.all.txtisbnset.value;
    if ((a == 0 || a == 2) && b != 1 && document.getElementById("TextBox7").value == "") {
        document.all.Label16.style.display = "block";
        document.all.RequiredFieldValidator6.style.display = "block";
        document.all.txtallowisbn.value = ""
    } else {
        document.all.txtallowisbn.value = "1";
        document.all.Label16.style.display = "none";
        document.all.RequiredFieldValidator6.style.display = "none"
    }
}
function ddltitle() {
    var a = document.all.DropDownList3.selectedIndex
      , b = document.all.txtisbnset.value;
    if ((a == 0 || a == 2) && b != 1 && document.getElementById("TextBox7").value == "")
        document.all.txtallowisbn.value = "";
    else
        document.all.txtallowisbn.value = "1"
}
function chkinput0(c, a) {
    var b = checkempty(document.all.TextBox4.value) == 1 && document.all.DropDownList5.value != "" || checkempty(document.all.TextBox4.value) == 0 && document.all.DropDownList5.value == "";
    a.IsValid = b
}
function chkinput1(c, a) {
    var b = checkempty(document.all.TextBox1.value) == 1 && document.all.DropDownList7.value != "" || checkempty(document.all.TextBox1.value) == 0 && document.all.DropDownList7.value == "";
    a.IsValid = b
}
function chkinput2(c, a) {
    var b = checkempty(document.all.TextBox2.value) == 1 && document.all.DropDownList9.value != "" || checkempty(document.all.TextBox2.value) == 0 && document.all.DropDownList9.value == "";
    a.IsValid = b
}
function chkinput3(c, a) {
    var b = checkempty(document.all.TextBox6.value) == 1 && document.all.DropDownList11.value != "" || checkempty(document.all.TextBox6.value) == 0 && document.all.DropDownList11.value == "";
    a.IsValid = b
}
function chkinput4(c, a) {
    var b = checkempty(document.all.TextBox5.value) == 1 && document.all.DropDownList10.value != "" || checkempty(document.all.TextBox5.value) == 0 && document.all.DropDownList10.value == "";
    a.IsValid = b
}
function chkdpt() {
    if (document.getElementById("CheckBox26").checked == 0 && document.getElementById("CheckBox27").checked == 0 && document.getElementById("CheckBox28").checked == 0 && document.getElementById("CheckBox29").checked == 0 && document.getElementById("CheckBox30").checked == 0)
        document.getElementById("txtdpt").value = "";
    else
        document.getElementById("txtdpt").value = "1"
}
function ch(a) {
    var b = document.getElementById(a).selectedIndex
      , d = document.getElementById(a).options(b).value
      , c = "weblinkwav/" + d;
    document.all.bgs.src = c
}
function dovoice(a) {
    var b = "weblinkwav/" + a;
    document.getElementById("bgs").src = b
}
function chkwavobj(b) {
    if (b != null && b != undefined) {
        var a = b.name;
        if (a == "CheckBox46")
            if (document.getElementById("CheckBox46").checked == 1) {
                document.getElementById("CheckBox52").checked = 1;
                document.getElementById("CheckBox52").disabled = 0
            } else {
                document.getElementById("CheckBox52").checked = 0;
                document.getElementById("CheckBox52").disabled = 1
            }
        if (a == "CheckBox47")
            if (document.getElementById("CheckBox47").checked == 1) {
                document.getElementById("CheckBox53").checked = 1;
                document.getElementById("CheckBox53").disabled = 0
            } else {
                document.getElementById("CheckBox53").checked = 0;
                document.getElementById("CheckBox53").disabled = 1
            }
        if (a == "CheckBox48")
            if (document.getElementById("CheckBox48").checked == 1) {
                document.getElementById("CheckBox54").checked = 1;
                document.getElementById("CheckBox54").disabled = 0
            } else {
                document.getElementById("CheckBox54").checked = 0;
                document.getElementById("CheckBox54").disabled = 1
            }
        if (a == "CheckBox49")
            if (document.getElementById("CheckBox49").checked == 1) {
                document.getElementById("CheckBox55").checked = 1;
                document.getElementById("CheckBox55").disabled = 0
            } else {
                document.getElementById("CheckBox55").checked = 0;
                document.getElementById("CheckBox55").disabled = 1
            }
        if (a == "CheckBox50")
            if (document.getElementById("CheckBox50").checked == 1) {
                document.getElementById("CheckBox56").checked = 1;
                document.getElementById("CheckBox56").disabled = 0
            } else {
                document.getElementById("CheckBox56").checked = 0;
                document.getElementById("CheckBox56").disabled = 1
            }
        if (a == "CheckBox51")
            if (document.getElementById("CheckBox51").checked == 1) {
                document.getElementById("CheckBox57").checked = 1;
                document.getElementById("CheckBox57").disabled = 0
            } else {
                document.getElementById("CheckBox57").checked = 0;
                document.getElementById("CheckBox57").disabled = 1
            }
    }
}
function chkwav() {
    if (document.getElementById("CheckBox46").checked == 1) {
        document.getElementById("CheckBox52").checked = 1;
        document.getElementById("CheckBox52").disabled = 0
    } else
        document.getElementById("CheckBox52").disabled = 1;
    if (document.getElementById("CheckBox47").checked == 1) {
        document.getElementById("CheckBox53").checked = 1;
        document.getElementById("CheckBox53").disabled = 0
    } else
        document.getElementById("CheckBox53").disabled = 1;
    if (document.getElementById("CheckBox48").checked == 1) {
        document.getElementById("CheckBox54").checked = 1;
        document.getElementById("CheckBox54").disabled = 0
    } else
        document.getElementById("CheckBox54").disabled = 1;
    if (document.getElementById("CheckBox49").checked == 1) {
        document.getElementById("CheckBox55").checked = 1;
        document.getElementById("CheckBox55").disabled = 0
    } else
        document.getElementById("CheckBox55").disabled = 1;
    if (document.getElementById("CheckBox50").checked == 1) {
        document.getElementById("CheckBox56").checked = 1;
        document.getElementById("CheckBox56").disabled = 0
    } else
        document.getElementById("CheckBox56").disabled = 1;
    if (document.getElementById("CheckBox51").checked == 1) {
        document.getElementById("CheckBox57").checked = 1;
        document.getElementById("CheckBox57").disabled = 0
    } else
        document.getElementById("CheckBox57").disabled = 1
}
function ddlidenchange(d) {
    var c;
    c = document.getElementById("DropDownList11").selectedIndex;
    var a = document.getElementById("DropDownList11").options(c).value
      , e = document.getElementById("DropDownList11").value
      , b = document.getElementById("TextBox17").value;
    if (a == null || a == "")
        document.all.TextBox17.value = "";
    else if (document.getElementById("TextBox19").value.length > 0) {
        if (b.indexOf(a) == -1)
            if (b.length > 0)
                document.all.TextBox17.value = b + a + ";";
            else
                document.all.TextBox17.value = b + ";" + a + ";"
    } else
        alert(d)
}
function ddldptchange() {
    var e;
    e = document.getElementById("DropDownList13").selectedIndex;
    var c = document.getElementById("DropDownList13").options(e).value
      , f = document.getElementById("DropDownList13").value
      , d = document.getElementById("TextBox19").value;
    if (c == null || c == "") {
        document.all.TextBox19.value = "";
        document.getElementById("CheckBox47").checked = 0;
        document.getElementById("chkl1").disabled = 0;
        document.getElementById("chkl2").disabled = 0;
        for (var a = 1; a <= 5; a++) {
            var b = eval("document.all.cbSb" + a);
            b.disabled = 0
        }
        for (var a = 0; a <= 9; a++) {
            var b = eval("document.all.cblang" + a);
            b.disabled = 0
        }
    } else {
        document.getElementById("chkl1").checked = 0;
        document.getElementById("chkl2").checked = 0;
        document.getElementById("chkl1").disabled = 1;
        document.getElementById("chkl2").disabled = 1;
        if (!document.getElementById("CheckBox47").checked)
            document.getElementById("TextBox20").disabled = 0;
        document.getElementById("chkl2").disabled = 1;
        for (var a = 1; a <= 5; a++) {
            var b = eval("document.all.cbSb" + a);
            b.checked = 0;
            b.disabled = 1
        }
        for (var a = 0; a <= 9; a++) {
            var b = eval("document.all.cblang" + a);
            b.checked = 0;
            b.disabled = 1
        }
        if (d.indexOf(c) == -1)
            if (d.length > 0)
                document.all.TextBox19.value = d + c + ";";
            else
                document.all.TextBox19.value = d + ";" + c + ";"
    }
}
function ddladddptcnt(c) {
    var b = document.getElementById("DropDownList13")
      , a = b.options.length - 1
      , d = replaceAll(c, "%1", a);
    document.getElementById("Label46").innerText = d;
    if (a > 0)
        document.getElementById("Label46").style.display = "block";
    else
        document.getElementById("Label46").style.display = "none"
}
function ddluserdpt(n, j, k, o) {
    for (var l = n.value.trim(), a = document.getElementById(j), h = a.options.length; h >= 0; h--)
        a.remove(h);
    for (var e = document.getElementById(k), c = 0; c < e.options.length; c++) {
        var m = e.options[c].value.indexOf(l);
        if (m > -1) {
            var g = document.createElement("option");
            g.text = e.options[c].value;
            g.value = e.options[c].value;
            a.options.add(g)
        }
    }
    var f = document.createElement("option");
    f.text = "";
    f.value = "";
    a.options.add(f);
    a.value = "";
    var i = document.getElementById("DropDownList13").selectedIndex
      , b = document.getElementById("DropDownList13").options(i).value
      , p = document.getElementById("DropDownList13").value
      , d = document.getElementById("TextBox19").value;
    if (b != null && b != "")
        if (d.indexOf(b) == -1)
            if (d.length > 0)
                document.all.TextBox19.value = d + b + ";";
            else
                document.all.TextBox19.value = d + ";" + b + ";";
    ddladddptcnt(o)
}
function selddldpt(j, i) {
    if (!j.checked) {
        i = "";
        document.getElementById("DropDownList13").value = "";
        document.all.TextBox19.value = "";
        document.getElementById("chkl1").disabled = 0;
        document.getElementById("chkl2").disabled = 0;
        document.getElementById("DropDownList13").disabled = 0;
        document.getElementById("TextBox20").disabled = 0;
        for (var a = 1; a <= 5; a++) {
            var c = eval("document.all.cbSb" + a);
            c.disabled = 0
        }
        for (var a = 0; a <= 9; a++) {
            var c = eval("document.all.cblang" + a);
            c.disabled = 0
        }
    } else {
        for (var h = document.getElementById("DropDownList13"), a = h.options.length; a >= 0; a--)
            h.remove(a);
        for (var d = document.getElementById("DropDownList14"), b = 0; b < d.options.length; b++) {
            var g = document.createElement("option");
            g.text = d.options[b].value;
            g.value = d.options[b].value;
            h.options.add(g)
        }
        document.getElementById("chkl1").checked = 0;
        document.getElementById("chkl2").checked = 0;
        document.getElementById("chkl1").disabled = 1;
        document.getElementById("chkl2").disabled = 1;
        document.getElementById("TextBox19").value = "";
        document.getElementById("TextBox20").value = "";
        document.getElementById("TextBox20").disabled = 1;
        document.getElementById("DropDownList13").disabled = 1;
        for (var a = 1; a <= 5; a++) {
            var c = eval("document.all.cbSb" + a);
            c.checked = 0;
            c.disabled = 1
        }
        for (var a = 0; a <= 9; a++) {
            var c = eval("document.all.cblang" + a);
            c.checked = 0;
            c.disabled = 1
        }
        for (var e = "", f = "", d = document.getElementById("DropDownList14"), b = 0; b < d.options.length; b++) {
            e = d.options[b].value;
            f = document.all.TextBox19.value;
            if (e != "")
                if (f.length > 0)
                    document.all.TextBox19.value = f + e + ";";
                else
                    document.all.TextBox19.value = f + ";" + e + ";"
        }
    }
    ddladddptcnt(i)
}
function updatedpt(b, a) {
    if (confirm(a)) {
        document.getElementById("Image1").style.display = "block";
        document.getElementById("labeltip").style.display = "block";
        document.all.txttip.value = "";
        document.getElementById("labeltip").innerText = b
    } else
        document.all.txttip.value = a
}
function checkform() {
    if (document.all.txttip.value != "")
        return false
}
function usrdate() {
    if (document.getElementById("CheckBox50").checked) {
        var a = new Date;
        document.all.TextBox18.disabled = 0;
        document.getElementById("TextBox18").style.background = "white"
    } else {
        document.all.TextBox18.value = "";
        document.all.TextBox18.disabled = 1;
        document.getElementById("TextBox18").style.background = "silver"
    }
}
function chklangsel() {
    for (var a = 1; a <= 5; a++) {
        var d = 0
          , b = "";
        document.getElementById("txtlang" + a).value = ";";
        for (var c = 0; c <= 9; c++)
            if (c != 5) {
                var e = eval("document.all.chklanguage_" + a + "_" + c);
                if (e.checked) {
                    d = d + 1;
                    b = ";" + c + b
                }
            }
        if (a == 1 && (document.getElementById("TextBox4").value != "" && document.getElementById("DropDownList5").value != "") || a == 2 && (document.getElementById("TextBox1").value != "" && document.getElementById("DropDownList7").value != "") || a == 3 && (document.getElementById("TextBox2").value != "" && document.getElementById("DropDownList9").value != "") || a == 4 && (document.getElementById("TextBox5").value != "" && document.getElementById("DropDownList10").value != "") || a == 5 && (document.getElementById("TextBox6").value != "" && document.getElementById("DropDownList11").value != ""))
            if (d < 1)
                document.getElementById("txtlang" + a).value = "";
            else {
                b = b + ";";
                document.getElementById("txtlang" + a).value = b
            }
    }
}
function chklangonesel() {
    var c = 0
      , a = "";
    document.getElementById("txtlang1").value = ";";
    for (var b = 0; b <= 9; b++)
        if (b != 5) {
            var d = eval("document.all.chklanguage_1_" + b);
            if (d.checked) {
                c = c + 1;
                a = ";" + b + a
            }
        }
    if (document.getElementById("TextBox4").value != "" && document.getElementById("DropDownList5").value != "")
        if (c < 1)
            document.getElementById("txtlang1").value = "";
        else {
            a = a + ";";
            document.getElementById("txtlang1").value = a
        }
}
function chklangqry() {
    var c = 0
      , b = "";
    document.getElementById("txtlang1").value = ";";
    for (var a = 0; a <= 9; a++)
        if (a != 5) {
            var d = eval("document.all.chklanguage_1_" + a);
            if (d.checked) {
                c = c + 1;
                b = ";" + a + b
            }
        }
    document.getElementById("txtlang1").value = b
}
function onUploadImgChange(b) {
    if (!b.value.match(/.jpg|.gif|.png|.bmp/i)) {
        alert("\u56fe\u7247\u683c\u5f0f\u65e0\u6548\uff01");
        return false
    }
    var a = document.getElementById("preview")
      , d = document.getElementById("preview_fake")
      , c = document.getElementById("preview_size_fake");
    if (b.files && b.files[0]) {
        a.style.display = "block";
        a.style.width = "auto";
        a.style.height = "auto";
        a.src = b.files[0].getAsDataURL()
    } else if (d.filters) {
        b.select();
        var e = document.selection.createRange().text;
        d.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = e;
        c.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = e;
        autoSizePreview(d, c.offsetWidth, c.offsetHeight);
        a.style.display = "none"
    }
}
function onPreviewLoad(a) {
    autoSizePreview(a, a.offsetWidth, a.offsetHeight)
}
function autoSizePreview(b, d, c) {
    var a = clacImgZoomParam(60, 60, d, c);
    b.style.width = a.width + "px";
    b.style.height = a.height + "px";
    b.style.marginTop = a.top + "px";
    b.style.marginLeft = a.left + "px"
}
function clacImgZoomParam(c, b, e, d) {
    var a = {
        width: e,
        height: d,
        top: 0,
        left: 0
    };
    if (e > c || d > b) {
        rateWidth = e / c;
        rateHeight = d / b;
        if (rateWidth > rateHeight) {
            a.width = c;
            a.height = d / rateWidth
        } else {
            a.width = e / rateHeight;
            a.height = b
        }
    }
    a.left = (c - a.width) / 2;
    a.top = (b - a.height) / 2;
    return a
}
function ddlSellerchange() {
    var d;
    d = document.getElementById("DropDownList28").selectedIndex;
    var a = document.getElementById("DropDownList28").options(d).text
      , c = document.getElementById("DropDownList28").value
      , b = document.getElementById("TextBox12").value
      , e = document.getElementById("TextBox12_2").value;
    if (a == null || a == "") {
        document.all.TextBox12.value = "";
        document.all.TextBox12_2.value = ""
    } else if (b.indexOf(a) == -1)
        if (document.all.TextBox12.value == "") {
            document.all.TextBox12.value = ";" + a + ";";
            document.all.TextBox12_2.value = ";" + c + ";"
        } else {
            document.all.TextBox12.value = b + a + ";";
            document.all.TextBox12_2.value = e + c + ";"
        }
}
function ddlidentitychange() {
    var c;
    c = document.getElementById("DropDownList9").selectedIndex;
    var a = document.getElementById("DropDownList9").options(c).text
      , b = document.getElementById("DropDownList9").value
      , e = document.getElementById("TextBox12").value
      , d = document.getElementById("TextBox12_2").value;
    if (a == null || a == "") {
        document.all.TextBox12.value = "";
        document.all.TextBox12_2.value = ""
    } else if (d.indexOf(";" + b + ";") == -1)
        if (c == 0) {
            document.all.TextBox12.value = ";" + a + ";";
            document.all.TextBox12_2.value = ";" + b + ";"
        } else if (c != 0)
            if (d.indexOf(";-1;") == -1)
                if (e != "") {
                    document.all.TextBox12.value = e + "\r\n;" + a + ";";
                    document.all.TextBox12_2.value = d + "\r\n;" + b + ";"
                } else {
                    document.all.TextBox12.value = ";" + a + ";";
                    document.all.TextBox12_2.value = ";" + b + ";"
                }
}
function jdgdeny(a) {
    var b = document.all.DropDownList1.selectedIndex
      , c = ";" + document.all.DropDownList1.options(b).value + ";";
    document.getElementById("txtbkdyidreson").value = "0";
    if (a.indexOf(c) > -1) {
        document.getElementById("txtbkdyidreson").value = "1";
        document.getElementById("Label37").style.display = "block";
        document.getElementById("DropDownList6").style.display = "block"
    } else {
        document.getElementById("DropDownList6").value = "";
        document.getElementById("Label37").style.display = "none";
        document.getElementById("DropDownList6").style.display = "none";
        document.getElementById("txtbkdyidreson").value = "0"
    }
}
function blinkobj(b, c) {
    var a = "";
    if (document.all)
        a += "var   el   =   document.all." + b + ";";
    else if (document.getElementById)
        a += 'var   el   =   document.getElementById("' + b + '");';
    a += 'el.style.visibility   =   el.style.visibility   ==   "hidden"   ?   "visible"   :   "hidden"';
    (document.all || document.getElementById) && setInterval(a, c)
}
function excelMoneySum(h) {
    var v = document.getElementById("txtexc").value
      , n = v.split(";")
      , s = document.getElementById("txtexcelprice").value
      , f = s.split(";")
      , o = document.getElementById("txtpricetype").value
      , e = o.split("+")
      , c = 0
      , b = 0;
    if (h != -1) {
        for (var a = 0; a < f.length; a++)
            if (isNaN(f[a]) == 0 && f[a] != "") {
                c = 1;
                if (h == 0)
                    c = 5;
                else if (h >= 1 && h <= 4)
                    c = h;
                else
                    c = parseInt(h) + 1;
                b = b + parseFloat(f[a]) * parseFloat(n[c])
            }
    } else
        for (var a = 0; a < f.length; a++)
            if (isNaN(f[a]) == 0 && f[a] != "") {
                c = -1;
                if (parseInt(e[a]) == 0)
                    c = 5;
                else if (parseInt(e[a]) >= 1 && parseInt(e[a]) <= 4)
                    c = parseInt(e[a]);
                else if (isNaN(parseInt(e[a])) == 0 && e[a] != "")
                    c = parseInt(e[a]) + 1;
                if (isNaN(parseInt(e[a])) == 0 && e[a] != "")
                    b = b + parseFloat(f[a]) * parseFloat(n[c])
            }
    b = b.toFixed(2);
    var x = document.getElementById("txt21").value
      , j = document.getElementById("txttotalmoney").value
      , l = document.getElementById("txtRecommendMoney").value
      , t = document.getElementById("txtrate").value
      , q = document.getElementById("lbltrate").value;
    if (isNaN(j) == 0 && j != "") {
        var k = parseFloat(j) - parseFloat(l) - b;
        k = k.toFixed(2);
        var g = parseFloat(j * t) - parseFloat(l) - b;
        g = g.toFixed(2);
        if (parseFloat(g) < 0 && document.getElementById("txtRecommendLimit").value == "1")
            document.getElementById("stipset1").value = 1;
        else
            document.getElementById("stipset1").value = ""
    } else {
        var k = "";
        document.getElementById("stipset1").value = ""
    }
    var y = x.replace("%1", j).replace("%2", l).replace("%3", b).replace("%4", k).replace("%5", q);
    document.getElementById("Label21").innerHTML = y;
    var r = document.getElementById("txtdatatype").value
      , z = document.getElementById("txt22").value
      , w = document.getElementById("txtnd").value
      , u = document.getElementById("txtdpt").value
      , p = document.getElementById("txtoutlay").value
      , i = p.split(";")
      , d = "";
    if (document.getElementById("RadioButton14").checked)
        d = i[0];
    else if (document.getElementById("RadioButton15").checked)
        d = i[1];
    else if (document.getElementById("RadioButton16").checked)
        d = i[2];
    else if (document.getElementById("RadioButton3").checked)
        d = i[3];
    else if (document.getElementById("RadioButton17").checked)
        d = i[4];
    var m = document.getElementById("txtoutlayuse").value;
    if (isNaN(d) == 0 && d != "") {
        var g = parseFloat(d) - parseFloat(m) - b;
        g = g.toFixed(2);
        if (parseFloat(g) < 0)
            document.getElementById("stipset2").value = 1;
        else
            document.getElementById("stipset2").value = ""
    } else {
        var g = "";
        document.getElementById("stipset2").value = ""
    }
    var A = z.replace("%1", w).replace("%2", u).replace("%3", r + d).replace("%4", m).replace("%5", b).replace("%6", g);
    document.getElementById("Label22").innerHTML = A;
    stip1set()
}
function checkdatatype() {
    ChangeType();
    checkrbprice()
}
function ChangeType() {
    for (var e = document.getElementsByName("t1"), c = document.getElementsByTagName("label"), d, f, a = 0; a < e.length; a++)
        if (e[a].checked) {
            d = e[a].id;
            for (var b = 0; b < c.length; b++)
                if (d == c[b].getAttribute("for")) {
                    f = c[b].innerText;
                    break
                }
            break
        }
    getdatatype(d)
}
function ChangelangType() {
    for (var e = document.getElementsByName("l1"), c = document.getElementsByTagName("label"), d, f, a = 0; a < e.length; a++)
        if (e[a].checked) {
            d = e[a].id;
            for (var b = 0; b < c.length; b++)
                if (d == c[b].getAttribute("for")) {
                    f = c[b].innerText;
                    break
                }
            break
        }
    getlangtype(d)
}
function getlangsel() {
    for (var b = document.getElementsByName("l1"), e = document.getElementsByTagName("label"), d, c, a = 0; a < b.length; a++)
        if (b[a].checked) {
            d = b[a].id;
            c = a;
            break
        }
    return c
}
function getdatatype(a) {
    var c = document.getElementById("txtalldatatype").value
      , b = c.split(";");
    if (a == "RadioButton14")
        document.getElementById("txtdatatype").value = b[0];
    else if (a == "RadioButton15")
        document.getElementById("txtdatatype").value = b[1];
    else if (a == "RadioButton16")
        document.getElementById("txtdatatype").value = b[2];
    else if (a == "RadioButton3")
        document.getElementById("txtdatatype").value = b[3];
    else if (a == "RadioButton17")
        document.getElementById("txtdatatype").value = b[4]
}
function getlangtype(a) {
    var c = document.getElementById("txtalllangtype").value
      , b = c.split(";");
    if (a == "rblanguage_0")
        document.getElementById("txtlangtype").value = b[0];
    else if (a == "rblanguage_1")
        document.getElementById("txtlangtype").value = b[1];
    else if (a == "rblanguage_2")
        document.getElementById("txtlangtype").value = b[2];
    else if (a == "rblanguage_3")
        document.getElementById("txtlangtype").value = b[3];
    else if (a == "rblanguage_4")
        document.getElementById("txtlangtype").value = b[4];
    else if (a == "rblanguage_6")
        document.getElementById("txtlangtype").value = b[5];
    else if (a == "rblanguage_7")
        document.getElementById("txtlangtype").value = b[6];
    else if (a == "rblanguage_8")
        document.getElementById("txtlangtype").value = b[7];
    else if (a == "rblanguage_9")
        document.getElementById("txtlangtype").value = b[8]
}
function stip1set() {
    if (document.getElementById("stipset1").value == "1" || document.getElementById("stipset2").value == "1" || document.getElementById("stipseller").value == "1" || document.getElementById("stiplg1").value == "1" || document.getElementById("stipcy1").value == "1" || document.all.txttech != undefined && document.all.txttech.value == "1" && (document.all.txtteacher != undefined && document.all.txtteacher.value == ""))
        document.all.stip1.disabled = 1;
    else
        document.all.stip1.disabled = 0
}
function dpttecher() {
    var c = document.all.DropDownList31.selectedIndex
      , b = document.all.DropDownList31.options(c).value;
    if (b != "") {
        var a = document.getElementById("TextBox1").value;
        if (a.length == 0)
            document.getElementById("TextBox1").value = b + "*";
        if (a.length > 0 && a.indexOf(b) == -1)
            if (a.indexOf("*") == -1)
                document.getElementById("TextBox1").value = b + "*" + a;
            else {
                var d = a.substring(a.lastIndexOf("*") + 1);
                document.getElementById("TextBox1").value = b + "*" + d
            }
    }
}
function ddlteacher() {
    var a = document.all.DropDownList4.selectedIndex
      , b = document.all.DropDownList4.options(a).value;
    document.getElementById("txtteacher").value = b;
    stip1set()
}
function chkrecommset() {
    if (document.getElementById("CheckBox16").checked == 0) {
        document.getElementById("CheckBox33").checked = 0;
        document.getElementById("CheckBox33").disabled = 1;
        document.getElementById("DropDownList11").disabled = 1
    } else {
        document.getElementById("CheckBox33").disabled = 0;
        document.getElementById("DropDownList11").disabled = 0
    }
}
function chkupdateset(e, d) {
    var a = 0;
    if (document.getElementById("Rbtnwk").checked == 1) {
        var c = 0;
        for (a = 0; a < 7; a++) {
            var b = eval("document.all.chkwk" + a);
            if (b != null && b != undefined && b.checked)
                c = 1
        }
        if (!c) {
            alert(e);
            return false
        }
    } else if (document.getElementById("Rbtnmonth").checked == 1)
        if (document.getElementById("TextBox1").value == "") {
            alert(d);
            return false
        }
}
function usrbookchk(a, b) {
    if (a.checked) {
        var c = eval("document.all." + b);
        c.checked = 0;
        document.all.CheckBox1.checked = 0;
        document.all.CheckBox46.checked = 0;
        document.all.CheckBox46.disabled = 1
    }
}
function assistantset() {
    if (document.getElementById("chkidentity").checked == 1) {
        document.getElementById("CheckBox51").checked = 1;
        document.getElementById("CheckBox51").disabled = 0
    } else {
        document.getElementById("CheckBox51").checked = 0;
        document.getElementById("CheckBox51").disabled = 1
    }
}
function modista(a) {
    if (a.id == "CheckBox8" && a.checked == 1) {
        document.getElementById("CheckBox52").checked = 1;
        document.getElementById("CheckBox52").disabled = 0
    } else if (a.id != "CheckBox52") {
        document.getElementById("CheckBox52").checked = 0;
        document.getElementById("CheckBox52").disabled = 1
    }
}
function modistaall() {
    if (document.getElementById("CheckBox8").checked == 1 && document.getElementById("CheckBox1").checked == 1) {
        document.getElementById("CheckBox52").checked = 1;
        document.getElementById("CheckBox52").disabled = 0
    } else if (document.getElementById("CheckBox8").checked == 0) {
        document.getElementById("CheckBox52").checked = 0;
        document.getElementById("CheckBox52").disabled = 1
    }
}
function usrmodify() {
    chklcheck();
    chkdptselect();
    chkbackup();
    usrdate();
    modistaall()
}
function setusrid(c, a) {
    var d = document.getElementById(a).selectedIndex
      , b = document.getElementById(a).options[d].value
      , f = b.indexOf("\t")
      , e = b.substr(0, f);
    document.getElementById(c).value = e
}
function moditearcher() {
    if (document.getElementById("CheckBox31").checked == 1) {
        document.getElementById("CheckBox35").disabled = 0;
        document.getElementById("CheckBox34").disabled = 0
    } else if (document.getElementById("CheckBox31").checked == 0) {
        document.getElementById("CheckBox35").checked = 0;
        document.getElementById("CheckBox35").disabled = 1;
        document.getElementById("CheckBox34").checked = 0;
        document.getElementById("CheckBox34").disabled = 1
    }
}
function ddlteachset() {
    ddlteacher();
    var a = document.all.DropDownList4.selectedIndex
      , b = document.all.DropDownList4.options(a).value;
    stip1set()
}
function txtteachset() {
    stip1set()
}
function setfield() {
    var b = $F("txtUserSet");
    if (b.length > 0) {
        for (j = 2; j <= 4; j++)
            for (i = 1; i <= 10; i++) {
                var d = (j - 1) * 10 + i - 1
                  , a = eval("document.all.cbg" + j + "_" + i);
                if (a != null && a != undefined)
                    if (b.substr(d, 1) == "1")
                        a.checked = 1;
                    else
                        a.checked = 0
            }
        var c = $("cbg2");
        c.checked = 0
    }
}
function ddlschoolchange() {
    var b = document.getElementById("CheckBoxList2").getElementsByTagName("input")
      , d = document.getElementById("CheckBoxList2").getElementsByTagName("label")
      , c = document.getElementById("ddlschool").value;
    document.getElementById("CheckBox5").checked = 0;
    for (var a = 0; a < b.length; a++)
        if (b[a].type == "checkbox") {
            b[a].checked = 0;
            if (c.indexOf(";" + b[a].parentElement.innerText + ";") > -1)
                b[a].checked = 1
        }
}
function chkoutlay(e, b) {
    var d = e.id
      , f = e.checked;
    if (d.indexOf("chkall") > -1)
        if ($(d).checked == 1)
            for (var a = 0; a <= 9; a++) {
                var c = eval($("chklanguage_" + b + "_" + a));
                if (c)
                    $("chklanguage_" + b + "_" + a).checked = 1
            }
        else
            for (var a = 0; a <= 9; a++) {
                var c = eval($("chklanguage_" + b + "_" + a));
                if (c)
                    $("chklanguage_" + b + "_" + a).checked = 0
            }
}
function excelset() {
    if ($("CheckBox5").checked == 1) {
        $("CheckBox6").disabled = 0;
        $("CheckBox7").disabled = 0;
        $("CheckBox6").checked = 1;
        $("CheckBox7").checked = 1
    } else {
        $("CheckBox6").disabled = 1;
        $("CheckBox7").disabled = 1;
        $("CheckBox6").checked = 0;
        $("CheckBox7").checked = 0
    }
}
function ddlLangchange() {
    var c;
    c = document.getElementById("DropDownList21").selectedIndex;
    var a = document.getElementById("DropDownList21").options(c).text
      , e = document.getElementById("DropDownList21").value
      , b = document.getElementById("TextBox17").value
      , d = document.getElementById("TextBox18").value;
    if (a == null || a == "") {
        document.all.TextBox17.value = "";
        document.all.TextBox18.value = ""
    } else if (b.indexOf(a) == -1) {
        document.all.TextBox17.value = b + a + ",";
        document.all.TextBox18.value = d + e + ","
    }
}
function boxAlpha() {
    var a = document.getElementById("showBox")
      , b = document.getElementById("alphaBox")
      , c = document.getElementById("content");
    if (a.style.display == "none") {
        a.style.display = "block";
        a.style.height = document.documentElement.scrollHeight;
        b.style.height = document.documentElement.scrollHeight + "px";
        if (navigator.appName == "Microsoft Internet Explorer")
            b.style.width = document.documentElement.scrollWidth + "px";
        else
            b.style.width = document.documentElement.scrollWidth + "px"
    } else
        a.style.display = "none"
}
