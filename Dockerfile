###################################################################################
#                          contribs/dovetail                                      #
###################################################################################
FROM scratch

VOLUME [ /var/lib/wi/wi-contrib.git ]

COPY . /var/lib/wi/wi-contrib.git/