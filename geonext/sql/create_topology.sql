alter table pbn4 add column source integer;
alter table pbn4 add column target integer;
select pgr_createTopology('pbn4', 10, 'geom', 'id');
CREATE INDEX pbn4_source_idx ON pbn4("source");
CREATE INDEX pbn4_target_idx ON pbn4("target");
