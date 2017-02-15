if(!document.getElementsByTagName('tr')[0]) {
    $.ajax({
        type: "POST",
        url: "/assets/functions/getDayData.php",
        success: function(result){
            // alert(result);
            thead = document.getElementsByTagName('thead')[0]
            tbody = document.getElementsByTagName('tbody')[0];

            titleRow = document.createElement('tr');
            dayth = document.createElement('th');
            dayth.textContent = 'day';
            titleRow.appendChild(dayth);
            objAll = JSON.parse(result);
            //get all group and sort
            arrGr = [];

            for(var i = 0;i<objAll[0].length;i++)
            {
                arrGr.push(objAll[0][i]['group']);
            }
            var unique = arrGr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            })
            unique.sort(function(a, b){return a-b});
            for(var i = 0;i<unique.length;i++)
            {
                th = document.createElement('th');
                th.textContent = unique[i];
                th.setAttribute('colspan','4');
                titleRow.appendChild(th);
            }
            //end get all  and sort group

            //add day
            firstRow = document.createElement('tr');
            firstth = document.createElement('th');
            firstth.setAttribute('rowspan','7');
            firstth.textContent = 'monday';
            firstRow.appendChild(firstth);
            tbody.appendChild(firstRow);
            //end add day
            // add empty TD for every tr
            firstLesson = document.createElement('tr');
            for(var indx = 0;indx<=5;indx++)
            {
                emptyTR = document.createElement('tr');

                for(var i = 1;i<titleRow.childNodes.length;i++)
                {
                    for(var j = 0;j<4;j++)
                    {
                        emptyTd = document.createElement('td');
                        emptyTR.appendChild(emptyTd);
                    }
                    tbody.appendChild(emptyTR);
                }
            }
            // add empty TD for every tr

            //insertINFO
            obj = objAll[0];


            for(var i = 0;i<obj.length;i++)
            {
                tr = tbody.getElementsByTagName('tr')[obj[i]['counter']];
                for(var j = 1;j<titleRow.childNodes.length;j++)
                {
                    if(titleRow.childNodes[j].textContent == obj[i]['group'])
                    {
                        tr.getElementsByTagName('td')[4*j-4].textContent = obj[i]['counter'];
                        tr.getElementsByTagName('td')[4*j-3].textContent = obj[i]['lesson'];
                        tr.getElementsByTagName('td')[4*j-2].textContent = obj[i]['teacher_name'];
                        tr.getElementsByTagName('td')[4*j-1].textContent = obj[i]['hall'];
                    }
                }
            }
            thead.appendChild(titleRow);
            $('table').each(function () {
                if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                    // Clone <thead>
                    var $w = $(window),
                        $t = $(this),
                        $thead = $t.find('thead').clone(),
                        $col = $t.find('thead, tbody').clone();

                    // Add class, remove margins, reset width and wrap table
                    $t
                        .addClass('sticky-enabled')
                        .css({
                            margin: 0,
                            width: '100%'
                        }).wrap('<div class="sticky-wrap" />');

                    if ($t.hasClass('overflow-y')) $t.removeClass('overflow-y').parent().addClass('overflow-y');

                    // Create new sticky table head (basic)
                    $t.after('<table class="sticky-thead" />');

                    // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
                    if ($t.find('tbody th').length > 0) {
                        $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                    }

                    // Create shorthand for things
                    var $stickyHead = $(this).siblings('.sticky-thead'),
                        $stickyCol = $(this).siblings('.sticky-col'),
                        $stickyInsct = $(this).siblings('.sticky-intersect'),
                        $stickyWrap = $(this).parent('.sticky-wrap');

                    $stickyHead.append($thead);

                    $stickyCol
                        .append($col)
                        .find('thead th:gt(0)').remove()
                        .end()
                        .find('tbody td').remove();

                    $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');

                    // Set widths
                    var setWidths = function () {
                            $t
                                .find('thead th').each(function (i) {
                                $stickyHead.find('th').eq(i).width($(this).width());
                            })
                                .end()
                                .find('tr').each(function (i) {
                                $stickyCol.find('tr').eq(i).height($(this).height());
                            });

                            // Set width of sticky table head
                            $stickyHead.width($t.width());

                            // Set width of sticky table col
                            $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                        },
                        repositionStickyHead = function () {
                            // Return value of calculated allowance
                            var allowance = calcAllowance();

                            // Check if wrapper parent is overflowing along the y-axis
                            if ($t.height() > $stickyWrap.height()) {
                                // If it is overflowing (advanced layout)
                                // Position sticky header based on wrapper scrollTop()
                                if ($stickyWrap.scrollTop() > 0) {
                                    // When top of wrapping parent is out of view
                                    $stickyHead.add($stickyInsct).css({
                                        opacity: 1,
                                        top: $stickyWrap.scrollTop()
                                    });
                                } else {
                                    // When top of wrapping parent is in view
                                    $stickyHead.add($stickyInsct).css({
                                        opacity: 0,
                                        top: 0
                                    });
                                }
                            } else {
                                // If it is not overflowing (basic layout)
                                // Position sticky header based on viewport scrollTop
                                if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                    // When top of viewport is in the table itself
                                    $stickyHead.add($stickyInsct).css({
                                        opacity: 1,
                                        top: $w.scrollTop() - $t.offset().top
                                    });
                                } else {
                                    // When top of viewport is above or below table
                                    $stickyHead.add($stickyInsct).css({
                                        opacity: 0,
                                        top: 0
                                    });
                                }
                            }
                        },
                        repositionStickyCol = function () {
                            if ($stickyWrap.scrollLeft() > 0) {
                                // When left of wrapping parent is out of view
                                $stickyCol.add($stickyInsct).css({
                                    opacity: 1,
                                    left: $stickyWrap.scrollLeft()
                                });
                            } else {
                                // When left of wrapping parent is in view
                                $stickyCol
                                    .css({opacity: 0})
                                    .add($stickyInsct).css({left: 0});
                            }
                        },
                        calcAllowance = function () {
                            var a = 0;
                            // Calculate allowance
                            $t.find('tbody tr:lt(3)').each(function () {
                                a += $(this).height();
                            });

                            // Set fail safe limit (last three row might be too tall)
                            // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                            if (a > $w.height() * 0.25) {
                                a = $w.height() * 0.25;
                            }

                            // Add the height of sticky header
                            a += $stickyHead.height();
                            return a;
                        };

                    setWidths();

                    $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
                        repositionStickyHead();
                        repositionStickyCol();
                    }));

                    $w
                        .load(setWidths)
                        .resize($.debounce(250, function () {
                            setWidths();
                            repositionStickyHead();
                            repositionStickyCol();
                        }))
                        .scroll($.throttle(250, repositionStickyHead));
                }
            });

        }
    });

}
